import { useRef, useState, useEffect } from "react";

const autoCorrelate = (buffer, sampleRate) => {
  const SIZE = buffer.length;
  let rms = 0;
  for (let i = 0; i < SIZE; i++) rms += buffer[i] * buffer[i];
  rms = Math.sqrt(rms / SIZE);
  if (rms < 0.01) return -1;

  let r1 = 0,
    r2 = SIZE - 1;
  for (let i = 0; i < SIZE / 2; i++)
    if (Math.abs(buffer[i]) < 0.2) {
      r1 = i;
      break;
    }
  for (let i = 1; i < SIZE / 2; i++)
    if (Math.abs(buffer[SIZE - i]) < 0.2) {
      r2 = SIZE - i;
      break;
    }

  const buf2 = buffer.slice(r1, r2);
  const c = new Array(buf2.length).fill(0);
  for (let i = 0; i < buf2.length; i++)
    for (let j = 0; j < buf2.length - i; j++) c[i] += buf2[j] * buf2[j + i];

  let d = 0;
  while (c[d] > c[d + 1]) d++;
  let maxval = -1,
    maxpos = -1;
  for (let i = d; i < buf2.length; i++) {
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  }

  let T0 = maxpos;
  const x1 = c[T0 - 1],
    x2 = c[T0],
    x3 = c[T0 + 1];
  const a = (x1 + x3 - 2 * x2) / 2;
  const b = (x3 - x1) / 2;
  if (a) T0 = T0 - b / (2 * a);

  return sampleRate / T0;
};

const frequencyToCents = (frequency) => {
  const A4 = 440;
  const semitones = 12 * Math.log2(frequency / A4);
  const nearest = Math.round(semitones);
  return Math.max(-50, Math.min(50, (semitones - nearest) * 100));
};

export const useMicrophone = () => {
  const [cents, setCents] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [permissionError, setPermissionError] = useState(false);

  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const animationFrameRef = useRef(null);
  const streamRef = useRef(null);

  const stopListening = () => {
    if (animationFrameRef.current)
      cancelAnimationFrame(animationFrameRef.current);
    if (audioContextRef.current) audioContextRef.current.close();
    if (streamRef.current)
      streamRef.current.getTracks().forEach((t) => t.stop());
    setIsListening(false);
    setCents(0);
  };

  const detectPitch = () => {
    const analyser = analyserRef.current;
    const buffer = new Float32Array(analyser.fftSize);

    const loop = () => {
      analyser.getFloatTimeDomainData(buffer);
      const frequency = autoCorrelate(
        buffer,
        audioContextRef.current.sampleRate,
      );
      if (frequency > 0) setCents(frequencyToCents(frequency));
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    loop();
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

  return { cents, isListening, permissionError, startListening };
};
