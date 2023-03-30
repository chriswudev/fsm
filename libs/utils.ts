export function arrayIncludes<T>(src: T[], target: T[]): boolean {
  return target.every((el) => src.includes(el));
}
