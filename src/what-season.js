const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if (!date) {
        return "Unable to determine the time of year!";
    } else if (!(date instanceof Date)) {
        return new Error("Invalid date!");
    } else {
        const season = {
            winter: ["Dec", "Jan", "Feb"],
            spring: ["Mar", "Apr", "May"],
            summer: ["Jun", "Jul", "Aug"],
            autumn: ["Sep", "Oct", "Nov"],
        };
        x = date.toString().split(" ")
        for (let i = 0; i < Object.entries(season).length; i++) {
            for (let j = 0; j < 3; j++) {
                if (x[1] == Object.entries(season)[i][1][j]) return Object.entries(season)[i][0]
            }
        }
    }
}

module.exports = {
  getSeason
};
