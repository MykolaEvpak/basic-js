const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) { 

  if(Array.isArray(arr)) {
    let res = [];

    arr.forEach(element => {
      if (typeof element == 'string' && element.match(/[a-zA-z]+/)) {
        res.push(element.trim().charAt(0).toUpperCase());
      }
    });

    return res.sort().join('');
  
  } else return false;

};