const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    return arr.every(e => !Array.isArray(e)) ? 1 : (this.calculateDepth(arr.flat()) + 1);
  }

};
