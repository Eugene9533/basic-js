const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    searchArrDepth(arr) {
        if (!Array.isArray(arr)) return 0;
        let calc = 0;
        for (let i of arr) {
            calc = Math.max(calc, this.searchArrDepth(i));
        }
        return 1 + calc;
    }
}

module.exports = {
  DepthCalculator
};
