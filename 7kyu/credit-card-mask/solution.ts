export function maskify(cc: string): string {
  const lastFourDigits = cc.slice(-4)
  return lastFourDigits.padStart(cc.length, "#")
}
