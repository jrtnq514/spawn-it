/**
 * Created by JT on 8/25/16.
 */

module.exports = {

    simple: function () {
        return Math.random() >= 0.5;
    },

    array: function (length) {
        

        let boolArray = [];
        for (var i = 0; i < length; i++) {
            boolArray.push(Math.random() >= 0.5);
        }

        return boolArray;
    },

    coinFlip: function () {
        
        if (Math.random() >= 0.5) {
            return 'heads';
        } else {
            return 'tails';
        }
    },

    bit: function () {
        if (Math.random() >= 0.5) {
            return 1;
        } else {
            return 0;
        }
    }

};