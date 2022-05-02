const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (position <= 0 || !Number.isInteger(position) || position > this.chain.length - 1) {
            err = new Error("You can't remove incorrect link!");
            return this;
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        if (typeof err !== 'undefined') return err
        return this.chain.join("~~");
    }
};

module.exports = {
  chainMaker
};
