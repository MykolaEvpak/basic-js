const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {

/* works but on node.js > 11 
  return twoDimentionalArray.flat().reduce((total, current) => {
    return current == "^^" ? ++total : total;
  }, 0); */

  let result = 0;

  for(let i = 0; i < arr.length; i++) {
    let row = arr[i];
    
    for(let j = 0; j < row.length; j++ ){
      if (arr[i][j] == "^^") {
        result++;
      }  
    }
  }
  return result;

};
