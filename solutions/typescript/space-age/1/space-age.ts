export function age(planet: string, seconds: number) {
  var nbrOfDays: number = 365.25 * PLANETS[capitalizeFirstLetter(planet)];
  var secInYear: number = nbrOfDays * 86400;
  var result = seconds / secInYear;
  return Math.round((result + Number.EPSILON) * 100) / 100;
}

interface Dictionary<T> {
    [key: string]: T;
}

export const PLANETS: Dictionary<number> = {
    "Mercury": 0.2408467,
    "Venus": 0.61519726,
    "Earth": 1.0,
    "Mars":	1.8808158,
    "Jupiter": 11.862615,
    "Saturn": 29.447498,
    "Uranus": 84.016846,
    "Neptune": 164.79132
};

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}