export function score(x: number, y: number) {
  const outer: number = 10;
  const middle: number = 5;
  const inner: number = 1
  const center: number = 0;
  const distance: number = Math.sqrt((x - center)**2 + (y - center)**2);
  
  return distance <= inner ? 10 : distance <= middle ? 5 : distance <= outer ? 1 : 0;
}
