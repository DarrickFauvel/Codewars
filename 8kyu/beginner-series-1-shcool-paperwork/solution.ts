export function paperwork(classmates: number, pages: number): number {
  if (classmates < 0 || pages < 0) return 0
  return classmates * pages
}
