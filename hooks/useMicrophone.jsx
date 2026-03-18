import { useRef, useState, useEffect } from "react";
import { PitchDetector } from "pitchy";
import { useSelector } from "react-redux";

export const useMicrophone = () => {
  const [frequency, setFrequency] = useState(null);
  const [clarity, setClarity] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [permissionError, setPermissionError] = useState(false);

  const isMuted = useSelector((state) => state.string.isMuted);

  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const animationFrameRef = useRef(null);
  const streamRef = useRef(null);
  const detectorRef = useRef(null);
  const inputRef = useRef(null);
  const timeoutRef = useRef(null);
  const isMutedRef = useRef(isMuted);

  // Keep isMutedRef in sync with Redux state
  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  const clearFrequency = () => {
    setFrequency(null);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const detectPitch = () => {
    const analyser = analyserRef.current;
    const detector = detectorRef.current;
    const input = inputRef.current;
    const sampleRate = audioContextRef.current.sampleRate;

    const loop = () => {
      analyser.getFloatTimeDomainData(input);

      if (!isMutedRef.current) {
        const [detectedPitch, detectedClarity] = detector.findPitch(
          input,
          sampleRate,
        );

        if (detectedClarity > 0.9 && detectedPitch > 50) {
          setFrequency(Math.round(detectedPitch * 10) / 10);
          setClarity(Math.round(detectedClarity * 100));

          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setFrequency(null);
          }, 7000);
        }
      }

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    loop();
  };

  const stopListening = () => {
    if (animationFrameRef.current)
      cancelAnimationFrame(animationFrameRef.current);
    if (audioContextRef.current) audioContextRef.current.close();
    if (streamRef.current)
      streamRef.current.getTracks().forEach((t) => t.stop());
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsListening(false);
    setFrequency(null);
  };

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;

      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;
      analyserRef.current = analyser;

      audioContext.createMediaStreamSource(stream).connect(analyser);

      const detector = PitchDetector.forFloat32Array(analyser.fftSize);
      detector.minVolumeDecibels = -10;
      detectorRef.current = detector;
      inputRef.current = new Float32Array(detector.inputLength);

      setIsListening(true);
      setPermissionError(false);
      detectPitch();
    } catch {
      setPermissionError(true);
      setIsListening(false);
    }
  };

  useEffect(() => {
    startListening();
    return () => stopListening();
  }, []);

  return {
    frequency,
    clarity,
    isListening,
    permissionError,
    startListening,
    clearFrequency,
  };
};
