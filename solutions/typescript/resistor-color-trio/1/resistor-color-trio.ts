export function decodedResistorValue(color: string[]): string {
  var value: string = '';
  var i: number = color.length;
  if (color.length > 3) {
    color.pop();
  }
  var zeroValue: string = '0'.repeat(COLORS.indexOf(color[color.length-1]));
  for (var i=0; i<color.length-1; i++) {   
    value += COLORS.indexOf(color[i].toLowerCase()).toString();
  }
  value += zeroValue;
  return metricValue(Number(value));
}

export function metricValue(value: number): string {
  var finalValue:string = '';
  if (value == 0) {
    finalValue = '0 ohms';
  } else if (Number.isInteger(value/ Math.pow(10, 9))){
    value = value/ Math.pow(10, 9);
    finalValue = `${value} gigaohms`;
  } else if (Number.isInteger(value/ Math.pow(10, 6))) {
    value = value/ Math.pow(10, 6);
    finalValue = `${value} megaohms`;
  } else if (Number.isInteger(value/ Math.pow(10, 3))){
    value = value/ Math.pow(10, 3);
    finalValue = `${value} kiloohms`;
  } else {
    finalValue = `${value} ohms`;
  }
  return finalValue;
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
  "white"
];