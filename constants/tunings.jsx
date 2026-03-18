export const TUNINGS = {
  // Standard
  standard: {
    label: "Standard",
    strings: ["E2", "A2", "D3", "G3", "B3", "E4"],
    frequencies: [82.41, 110.0, 146.83, 196.0, 246.94, 329.63],
  },

  // Drop tunings
  dropD: {
    label: "Drop D",
    strings: ["D2", "A2", "D3", "G3", "B3", "E4"],
    frequencies: [73.42, 110.0, 146.83, 196.0, 246.94, 329.63],
  },
  dropC: {
    label: "Drop C",
    strings: ["C2", "G2", "C3", "F3", "A3", "D4"],
    frequencies: [65.41, 98.0, 130.81, 174.61, 220.0, 293.66],
  },
  dropB: {
    label: "Drop B",
    strings: ["B1", "F#2", "B2", "E3", "G#3", "C#4"],
    frequencies: [61.74, 92.5, 123.47, 164.81, 207.65, 277.18],
  },
  dropA: {
    label: "Drop A",
    strings: ["A1", "E2", "A2", "D3", "F#3", "B3"],
    frequencies: [55.0, 82.41, 110.0, 146.83, 185.0, 246.94],
  },

  // Down tunings
  halfStepDown: {
    label: "Half Step Down (Eb)",
    strings: ["Eb2", "Ab2", "Db3", "Gb3", "Bb3", "Eb4"],
    frequencies: [77.78, 103.83, 138.59, 185.0, 233.08, 311.13],
  },
  fullStepDown: {
    label: "Full Step Down (D)",
    strings: ["D2", "G2", "C3", "F3", "A3", "D4"],
    frequencies: [73.42, 98.0, 130.81, 174.61, 220.0, 293.66],
  },
  oneAndHalfDown: {
    label: "1.5 Steps Down (C#)",
    strings: ["C#2", "F#2", "B2", "E3", "G#3", "C#4"],
    frequencies: [69.3, 92.5, 123.47, 164.81, 207.65, 277.18],
  },
  twoStepsDown: {
    label: "2 Steps Down (C)",
    strings: ["C2", "F2", "Bb2", "Eb3", "G3", "C4"],
    frequencies: [65.41, 87.31, 116.54, 155.56, 196.0, 261.63],
  },

  // Open tunings
  openG: {
    label: "Open G",
    strings: ["D2", "G2", "D3", "G3", "B3", "D4"],
    frequencies: [73.42, 98.0, 146.83, 196.0, 246.94, 293.66],
  },
  openD: {
    label: "Open D",
    strings: ["D2", "A2", "D3", "F#3", "A3", "D4"],
    frequencies: [73.42, 110.0, 146.83, 185.0, 220.0, 293.66],
  },
  openE: {
    label: "Open E",
    strings: ["E2", "B2", "E3", "G#3", "B3", "E4"],
    frequencies: [82.41, 123.47, 164.81, 207.65, 246.94, 329.63],
  },
  openA: {
    label: "Open A",
    strings: ["E2", "A2", "E3", "A3", "C#4", "E4"],
    frequencies: [82.41, 110.0, 164.81, 220.0, 277.18, 329.63],
  },
  openC: {
    label: "Open C",
    strings: ["C2", "G2", "C3", "G3", "C4", "E4"],
    frequencies: [65.41, 98.0, 130.81, 196.0, 261.63, 329.63],
  },
  openB: {
    label: "Open B",
    strings: ["B1", "F#2", "B2", "F#3", "B3", "D#4"],
    frequencies: [61.74, 92.5, 123.47, 185.0, 246.94, 311.13],
  },

  // DADGAD & modal
  dadgad: {
    label: "DADGAD",
    strings: ["D2", "A2", "D3", "G3", "A3", "D4"],
    frequencies: [73.42, 110.0, 146.83, 196.0, 220.0, 293.66],
  },
  dadDad: {
    label: "DAD DAD",
    strings: ["D2", "A2", "D3", "D3", "A3", "D4"],
    frequencies: [73.42, 110.0, 146.83, 146.83, 220.0, 293.66],
  },
  dgdgbd: {
    label: "Open G5 (DGDGBD)",
    strings: ["D2", "G2", "D3", "G3", "B3", "D4"],
    frequencies: [73.42, 98.0, 146.83, 196.0, 246.94, 293.66],
  },

  // Nashville / special
  nashvilleTuning: {
    label: "Nashville Tuning",
    strings: ["E3", "A3", "D4", "G4", "B3", "E4"],
    frequencies: [164.81, 220.0, 293.66, 392.0, 246.94, 329.63],
  },
  allFourths: {
    label: "All Fourths",
    strings: ["E2", "A2", "D3", "G3", "C4", "F4"],
    frequencies: [82.41, 110.0, 146.83, 196.0, 261.63, 349.23],
  },
  allFifths: {
    label: "All Fifths",
    strings: ["C2", "G2", "D3", "A3", "E4", "B4"],
    frequencies: [65.41, 98.0, 146.83, 220.0, 329.63, 493.88],
  },
};
