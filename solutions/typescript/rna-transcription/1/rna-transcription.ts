export function toRna(dnaStr: string): string {
  var newSequence: string = ''
  for (const c of dnaStr.split('')) {
    if (c == 'G') {
      newSequence = newSequence.concat('C');
    } else if (c == 'C') {
      newSequence = newSequence.concat('G');
    } else if (c == 'T') {
      newSequence = newSequence.concat('A');
    } else if (c == 'A') {
      newSequence = newSequence.concat('U');
    } else {
      throw "Invalid input DNA.";
    }
  }
  return newSequence;
}