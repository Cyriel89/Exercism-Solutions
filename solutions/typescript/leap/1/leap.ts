export function isLeap(year: number): boolean {
  var isLeap: boolean = false
  if (Number.isInteger(year / 400)){
    isLeap = true;
  } else if  (Number.isInteger(year / 100)){
    isLeap = false;
  } else if  (Number.isInteger(year / 4)) {
    isLeap = true;
  } else {
    isLeap = false;
  }

  return isLeap;
}
