function reverseNumber(number) {
  let output = String(number);
  return Number(output.split('').reverse().join(''));
}