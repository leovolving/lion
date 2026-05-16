export function cn(...args: (string | boolean | undefined | null | number)[]) {
  return Array.from(args).filter(Boolean).join(' ')
}
