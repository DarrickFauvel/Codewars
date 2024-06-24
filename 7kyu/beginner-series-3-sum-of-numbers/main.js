function getSum(a, b) {
  const lowNum = a < b ? a : b
  const highNum = a > b ? a : b

  let sum = 0

  for (let i = lowNum; i <= highNum; i++) {
    sum = sum + i
  }

  return sum
}

export { getSum }
