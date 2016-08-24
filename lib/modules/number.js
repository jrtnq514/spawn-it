/**
 * Created by JT on 8/22/16.
 */

var number = {
    
    int: {
        between: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },

        ofLength: function (length) {
            return Math.floor((this.between(1, 9) * Math.pow(10, length - 1)) + Math.random() * Math.pow(10, length - 1));
        }
    },

    decimal: {
        between: function (min, max) {

        },

        ofLength: function () {

        }
    }
    
}

module.exports = number;
