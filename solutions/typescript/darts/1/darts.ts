export function score(x: number, y: number) {
  console.log(x, y);
  const outer: number = 10;
  const middle: number = 5;
  const inner: number = 1
  const center: number = 0;

  const distance: number = Math.sqrt((x - center)**2 + (y - center)**2);

  if (distance <= inner) {
    return 10;
  } else if (distance <= middle){
    return 5;
  } else if (distance <= outer) {
    return 1;
  } else {
    return 0;
  }
  
}
