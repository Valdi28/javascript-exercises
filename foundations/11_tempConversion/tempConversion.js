const convertToCelsius = function(temperature) {
  const temperatureInCelsius = (temperature - 32) * 5/9

  return Math.round(temperatureInCelsius * 10) / 10

};

const convertToFahrenheit = function(temperature) {
  const temperatureInFarenheit = temperature * 9/5 + 32

  return Math.round(temperatureInFarenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
