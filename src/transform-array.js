const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    let newArr = [];
    let index = [];
    if (!Array.isArray(arr)) return new Error("'arr' parameter must be an instance of the Array!");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-next") {
            index.push(arr.indexOf(arr[i]));
        } else if (arr[i] === "--discard-prev") {
            index.push(arr.indexOf(arr[i - 2]));
        } else if (arr[i] === "--double-next") {
            newArr.push(arr[i + 1])
        } else if (arr[i] === "--double-prev") {
            newArr.push(arr[i - 1])
        } else { newArr.push(arr[i]) }
    }
    index = [... new Set(index)]
    for (let i = 0; i < index.length; i++) {
        newArr.splice(index[i], 1)
    }
    return newArr;
}

module.exports = {
  transform
};
