// A Selection of useful utilities

function rando(low, high) {
  let multiplier = 1;
  let shift = 0;

  if (low && high) {
    multiplier = high - low;
    shift = low;
  } else if (low && !high) {
    multiplier = low;
  }
  let result = Math.random() * multiplier + shift;
  return result;
}

function clip(valueToClip, low = 0, high = 100) {
  let clipped = Math.max(low, Math.min(high, valueToClip));
  return clipped;
}


