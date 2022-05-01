const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    let team = "";
    for (let i = 0; i < members.length; i++) {
        if (typeof (members[i]) === 'string') {
            let x = members[i].replace(/\s/g, '')
            team += x[0];
        }
    }
    let teamName = team.toUpperCase().split("").sort().join('');
    if (teamName == "") return false;
    return teamName;
}

module.exports = {
  createDreamTeam
};
