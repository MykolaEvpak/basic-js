const CustomError = require("../extensions/custom-error");

const DEFAULT_SEPARATOR = "+";
const DEFAULT_ADDITION_SEPARATOR = "|";

function calculateAddition(options) {
  let res = "";

  if(options.hasOwnProperty("additionRepeatTimes") && Number.isInteger(options.additionRepeatTimes)) {

    for(let i = 0; i < options.additionRepeatTimes; i++) {
      res += options.addition;
  
      if (i !== (options.additionRepeatTimes - 1)) {
        res += (options.additionSeparator || DEFAULT_ADDITION_SEPARATOR);
      }
       
    }
  } else return options.addition || "";
  
  return res;
}

module.exports = function repeater(str, options) {

  if(!options) return str;

  let result = "";
  let addition = calculateAddition(options);

  if(options.hasOwnProperty("repeatTimes") && Number.isInteger(options.repeatTimes)) {

    for(var i = 0; i < options.repeatTimes; i++) {
      result += str + addition;
      
      if (i !== (options.repeatTimes - 1)) {
        result += (options.separator || DEFAULT_SEPARATOR);
      }
  
    }
  } else return str + addition;

  return result;

};

// repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }) //, 'la+sla+sla+');
// repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 }) //, 'LALA++sLALA++sLALA++');