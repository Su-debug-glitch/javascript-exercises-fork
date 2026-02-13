const convertToCelsius = function(temp) {
  let converted = Math.round(((temp - 32) * 5 / 9) * 10) / 10;
  return converted;
};

const convertToFahrenheit = function(temp) {
    let converted = Math.round(((temp * 9/5) + 32) * 10) / 10;
    return converted;
};
/*
console.log(convertToCelsius(32));
console.log(convertToCelsius(35));
console.log(convertToCelsius(-3));
console.log(convertToFahrenheit(0));
console.log(convertToFahrenheit(100));
console.log(convertToFahrenheit(15.9));
*/
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
