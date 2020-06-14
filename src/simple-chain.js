const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {

    if (position < this.getLength()) {
        this.chain.splice(position - 1, 1);
    } else {
        this.chain = [];
        throw new Error();
    }

    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    var result = this.chain.map( element => {
      return "( " + element + " )"; 
    });

    this.chain = [];
    return result.join('~~');
  }
};

module.exports = chainMaker;

