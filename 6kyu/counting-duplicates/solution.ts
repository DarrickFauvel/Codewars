export function duplicateCount(text: string): any {
  const characterFrequency: { [key: string]: number } = {}

  // capture frequency of non-numeric characters
  for (let char of text.toLowerCase()) {
    if (!"0123456789".includes(char)) {
      if (characterFrequency[char]) {
        characterFrequency[char]++
      } else {
        characterFrequency[char] = 1
      }
    }
  }

  // count number of duplicates found
  let duplicateCount = 0
  for (let key in characterFrequency) {
    if (characterFrequency[key] > 1) {
      duplicateCount++
    }
  }

  return duplicateCount
}

console.log(duplicateCount("abBc99deEe"))
