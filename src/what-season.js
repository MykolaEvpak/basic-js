const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if(!date) {
    return 'Unable to determine the time of year!';
  } else if(!(date instanceof Date)) {
    throw new Error();
  } else {
    const season = new Map([
      [0,'winter'],
      [1,'winter'],
      [2,'spring'],
      [3,'spring'],
      [4,'spring'],
      [5,'summer'],
      [6,'summer'],
      [7,'summer'],
      [8,'autumn'],
      [9,'autumn'],
      [10,'autumn'],
      [11,'winter'],
  ]);

    return season.get(date.getMonth());
  }

};
