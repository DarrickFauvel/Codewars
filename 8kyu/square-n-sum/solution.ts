export function squareSum(numbers: number[]): number {
  let result = 0
  numbers.forEach((num) => (result = num * num + result))
  return result
}
