const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let resArray = [];

  if (arr && arr instanceof Array) {

    let discardNext = false;

    for (var i = 0; i < arr.length; i++) {

      if (arr[i] == '--double-next' && i < arr.length) {
        arr[i+1] && resArray.push(arr[i+1]);
      } else if (arr[i] == '--discard-prev') {
        !discardNext &&  resArray.pop(arr[i-1]);
        discardNext = false;
      } else if (arr[i] == '--discard-next') {
        discardNext = true;
        ++i;
      } else if (arr[i] == '--double-prev') {
        resArray[i-1] && resArray.push(arr[i-1]);
      } else {
        resArray.push(arr[i]);
      }
    }

  } else throw new Error();

  return resArray;

};