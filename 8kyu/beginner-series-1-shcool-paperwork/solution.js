export function paperwork(classmates, pages) {
    if (classmates < 0 || pages < 0)
        return 0;
    return classmates * pages;
}
