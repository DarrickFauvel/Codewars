export function squareSum(numbers) {
    let result = 0;
    numbers.forEach((num) => (result = num * num + result));
    return result;
}
