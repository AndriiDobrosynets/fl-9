let sideA = parseFloat(prompt('Enter first side', 0));
let sideB = parseFloat(prompt('Enter second side', 0));
let angle = parseFloat(prompt('Enter angle', 0));
let sideC = null;
let result = null;
let perimeter = null;
let square = null;
const ANGLE = 180;

if (sideA > 0 && sideB > 0 && angle > 0 && angle < ANGLE) {
  const GAMMA = Math.PI / ANGLE * angle;
  sideC = Math.sqrt(sideA * sideA + sideB * sideB - 2 * sideA * sideB * Math.cos(GAMMA));
  perimeter = sideA + sideB + sideC;
  square = Math.sqrt(perimeter / 2 * ((perimeter / 2 - sideA) * (perimeter / 2 - sideB) * (perimeter / 2 - sideC)));
  result = `
  c length: ${parseFloat(sideC.toFixed(2))} 
  Triangle square: ${parseFloat(square.toFixed(2))}
  Triangle perimeter: ${parseFloat(perimeter.toFixed(2))}
  `;
} else {
  result = 'Invalid date';
}



console.log(result);