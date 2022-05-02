const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    newStr = [];
    for (let i = 1; i <= options.repeatTimes; i++) {
        let addition = [];
        for (let j = 1; j <= options.additionRepeatTimes; j++) {
            addition.push(options.addition);
        }
        if (options.additionSeparator == undefined) options.additionSeparator = "|";
        addition = addition.join(options.additionSeparator);
        newStr.push(str + addition);
    }
    if (options.separator == undefined) options.separator = "+";
    newStr = newStr.join(options.separator);
    return newStr
}

module.exports = {
  repeater
};
