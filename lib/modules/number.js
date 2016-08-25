/**
 * Created by JT on 8/22/16.
 */

module.exports = {

    int: {
        /**
         * Gets an int between the given min and max values.
         * @param min
         * @param max
         */
        between: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },

        /**
         * Gets an int of the given length.
         * @param length
         */
        ofLength: function (length) {
            return Math.floor((this.between(1, 9) * Math.pow(10, length - 1)) + Math.random() * Math.pow(10, length - 1));
        }
    },

    decimal: {
        /**
         * Gets an decimal between the given min and max values.
         * @param min
         * @param max
         * @param precision
         */
        between: function (min, max, precision, string) {
            if (string) {
                return (Math.random() * (max - min + 1) + min).toFixed(precision);
            } else {
                return (Math.random() * (max - min + 1) + min).toFixedNumber(precision);
            }
        },

        /**
         * Gets an int of the given length.
         * @param length
         * @param precision
         * @disclaimer length applies to number of integer digits and doesn't count decimal places
         */
        ofLength: function (length, precision, string) {
            if (string) {
                return ((Math.floor(Math.random() * (10)) * Math.pow(10, length - 1)) + Math.random() * Math.pow(10, length - 1)).toFixed(precision);
            } else {
                return parseFloat(((Math.floor(Math.random() * (10)) * Math.pow(10, length - 1)) + Math.random() * Math.pow(10, length - 1)).toFixed(precision));
            }
        }
    }
    
};

// Returns a number and not a string like .toFixed()
Number.prototype.toFixedNumber = function(x, base){
    var pow = Math.pow(base||10,x);
    return +( Math.round(this*pow) / pow );
}