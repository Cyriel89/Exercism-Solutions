export function isPangram(str: string) {
  for (let c of ALPHABET) {
    if (!str.replace(/[^\w\s\']|_/g,'').toLowerCase().includes(c)) {
      return false;
    }
  }
  return true;
}

export const ALPHABET: string = "abcdefghijklmnopqrstuvwxyz";