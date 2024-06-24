const reverseSeq = (n) => {
  const newArray = []

  while (n > 0) {
    newArray.push(n)
    n--
  }

  return newArray
}

// console.log(reverseSeq(5))

export { reverseSeq }
