const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

// t = ln(N0/N)/k (example 2 from article)
// k = 0.693/5730
module.exports = function dateSample(sampleActivity) {

  if(!sampleActivity || typeof sampleActivity !== 'string')
    return false;

  const activity = parseFloat(sampleActivity);

  if(isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY)
    return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / Number(activity)) / (0.693 / HALF_LIFE_PERIOD));

};
