export function decodedValue(color: string[]) {
  var value: string = '';
  if (color.length > 2) {
    color.pop();
  }
  for (var i=0; i<color.length; i++) {
    console.log(color[i], i);
    value += COLORS.indexOf(color[i].toLowerCase()).toString();
    console.log(value);
  }
  return Number(value);
}

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];