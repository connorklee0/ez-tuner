export const TUNINGS = {
  // Standard
  standard: {
    label: "Standard",
    strings: { 6: "E", 5: "A", 4: "D", 3: "G", 2: "B", 1: "E" },
    frequencies: {
      6: 82.41,
      5: 110.0,
      4: 146.83,
      3: 196.0,
      2: 246.94,
      1: 329.63,
    },
  },

  // Drop tunings
  dropD: {
    label: "Drop D",
    strings: { 6: "D", 5: "A", 4: "D", 3: "G", 2: "B", 1: "E" },
    frequencies: {
      6: 73.42,
      5: 110.0,
      4: 146.83,
      3: 196.0,
      2: 246.94,
      1: 329.63,
    },
  },
  dropC: {
    label: "Drop C",
    strings: { 6: "C", 5: "G", 4: "C", 3: "F", 2: "A", 1: "D" },
    frequencies: {
      6: 65.41,
      5: 98.0,
      4: 130.81,
      3: 174.61,
      2: 220.0,
      1: 293.66,
    },
  },
  dropB: {
    label: "Drop B",
    strings: { 6: "B", 5: "F#", 4: "B", 3: "E", 2: "G#", 1: "C#" },
    frequencies: {
      6: 61.74,
      5: 92.5,
      4: 123.47,
      3: 164.81,
      2: 207.65,
      1: 277.18,
    },
  },
  dropA: {
    label: "Drop A",
    strings: { 6: "A", 5: "E", 4: "A", 3: "D", 2: "F#", 1: "B" },
    frequencies: {
      6: 55.0,
      5: 82.41,
      4: 110.0,
      3: 146.83,
      2: 185.0,
      1: 246.94,
    },
  },

  // Down tunings
  halfStepDown: {
    label: "Half Step Down (Eb)",
    strings: { 6: "Eb", 5: "Ab", 4: "Db", 3: "Gb", 2: "Bb", 1: "Eb" },
    frequencies: {
      6: 77.78,
      5: 103.83,
      4: 138.59,
      3: 185.0,
      2: 233.08,
      1: 311.13,
    },
  },
  fullStepDown: {
    label: "Full Step Down (D)",
    strings: { 6: "D", 5: "G", 4: "C", 3: "F", 2: "A", 1: "D" },
    frequencies: {
      6: 73.42,
      5: 98.0,
      4: 130.81,
      3: 174.61,
      2: 220.0,
      1: 293.66,
    },
  },
  oneAndHalfDown: {
    label: "1.5 Steps Down (C#)",
    strings: { 6: "C#", 5: "F#", 4: "B", 3: "E", 2: "G#", 1: "C#" },
    frequencies: {
      6: 69.3,
      5: 92.5,
      4: 123.47,
      3: 164.81,
      2: 207.65,
      1: 277.18,
    },
  },
  twoStepsDown: {
    label: "2 Steps Down (C)",
    strings: { 6: "C", 5: "F", 4: "Bb", 3: "Eb", 2: "G", 1: "C" },
    frequencies: {
      6: 65.41,
      5: 87.31,
      4: 116.54,
      3: 155.56,
      2: 196.0,
      1: 261.63,
    },
  },

  // Open tunings
  openG: {
    label: "Open G",
    strings: { 6: "D", 5: "G", 4: "D", 3: "G", 2: "B", 1: "D" },
    frequencies: {
      6: 73.42,
      5: 98.0,
      4: 146.83,
      3: 196.0,
      2: 246.94,
      1: 293.66,
    },
  },
  openD: {
    label: "Open D",
    strings: { 6: "D", 5: "A", 4: "D", 3: "F#", 2: "A", 1: "D" },
    frequencies: {
      6: 73.42,
      5: 110.0,
      4: 146.83,
      3: 185.0,
      2: 220.0,
      1: 293.66,
    },
  },
  openE: {
    label: "Open E",
    strings: { 6: "E", 5: "B", 4: "E", 3: "G#", 2: "B", 1: "E" },
    frequencies: {
      6: 82.41,
      5: 123.47,
      4: 164.81,
      3: 207.65,
      2: 246.94,
      1: 329.63,
    },
  },
  openA: {
    label: "Open A",
    strings: { 6: "E", 5: "A", 4: "E", 3: "A", 2: "C#", 1: "E" },
    frequencies: {
      6: 82.41,
      5: 110.0,
      4: 164.81,
      3: 220.0,
      2: 277.18,
      1: 329.63,
    },
  },
  openC: {
    label: "Open C",
    strings: { 6: "C", 5: "G", 4: "C", 3: "G", 2: "C", 1: "E" },
    frequencies: {
      6: 65.41,
      5: 98.0,
      4: 130.81,
      3: 196.0,
      2: 261.63,
      1: 329.63,
    },
  },
  openB: {
    label: "Open B",
    strings: { 6: "B", 5: "F#", 4: "B", 3: "F#", 2: "B", 1: "D#" },
    frequencies: {
      6: 61.74,
      5: 92.5,
      4: 123.47,
      3: 185.0,
      2: 246.94,
      1: 311.13,
    },
  },

  // DADGAD & modal
  dadgad: {
    label: "DADGAD",
    strings: { 6: "D", 5: "A", 4: "D", 3: "G", 2: "A", 1: "D" },
    frequencies: {
      6: 73.42,
      5: 110.0,
      4: 146.83,
      3: 196.0,
      2: 220.0,
      1: 293.66,
    },
  },
  dadDad: {
    label: "DAD DAD",
    strings: { 6: "D", 5: "A", 4: "D", 3: "D", 2: "A", 1: "D" },
    frequencies: {
      6: 73.42,
      5: 110.0,
      4: 146.83,
      3: 146.83,
      2: 220.0,
      1: 293.66,
    },
  },
  dgdgbd: {
    label: "Open G5",
    strings: { 6: "D", 5: "G", 4: "D", 3: "G", 2: "B", 1: "D" },
    frequencies: {
      6: 73.42,
      5: 98.0,
      4: 146.83,
      3: 196.0,
      2: 246.94,
      1: 293.66,
    },
  },

  // Nashville / special
  nashvilleTuning: {
    label: "Nashville Tuning",
    strings: { 6: "E", 5: "A", 4: "D", 3: "G", 2: "B", 1: "E" },
    frequencies: {
      6: 164.81,
      5: 220.0,
      4: 293.66,
      3: 392.0,
      2: 246.94,
      1: 329.63,
    },
  },
  allFourths: {
    label: "All Fourths",
    strings: { 6: "E", 5: "A", 4: "D", 3: "G", 2: "C", 1: "F" },
    frequencies: {
      6: 82.41,
      5: 110.0,
      4: 146.83,
      3: 196.0,
      2: 261.63,
      1: 349.23,
    },
  },
  allFifths: {
    label: "All Fifths",
    strings: { 6: "C", 5: "G", 4: "D", 3: "A", 2: "E", 1: "B" },
    frequencies: {
      6: 65.41,
      5: 98.0,
      4: 146.83,
      3: 220.0,
      2: 329.63,
      1: 493.88,
    },
  },
};
