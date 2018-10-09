var inputs = process.argv.slice(2);
var result = inputs.map(word => word.charAt(0))
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(result);