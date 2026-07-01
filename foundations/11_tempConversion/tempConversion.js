const convertToCelsius = function(fhn) {
  
  let cls= (fhn - 32) * 5/9
  let result = Math.round(cls *10) / 10
  cls = result
  return cls
// cleaner code: result = Math.round((fhn - 32) * 5/9 * 10) / 10
};

const convertToFahrenheit = function(cls) {
  let fhn = (cls * 9/5) + 32
  let result = Math.round(fhn * 10) / 10
  fhn = result
  return fhn
  //cleaner code: result = Math.round((cls * 9/5 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
