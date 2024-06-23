function past(h, m, s) {
  const computedMs = {
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  }

  return h * computedMs.hour + m * computedMs.minute + s * computedMs.second
}

// console.log(past(0, 1, 1))

export { past }
