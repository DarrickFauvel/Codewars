function ShortLongShort(a, b) {
  if (a.length > b.length) {
    return b + a + b
  } else {
    return a + b + a
  }
}

ShortLongShort("one", "three")
