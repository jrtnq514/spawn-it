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
        },
        
        array: function (length, min, max) {
            let intArray = [];
            
            if (min != null && max != null) {
                for (let i = 0; i < length; i++) {
                    intArray.push(this.between(min, max));
                }
            } else {
                for (let i = 0; i < length; i++) {
                    intArray.push(this.between(0, 99));
                }
            }

            return intArray;
        }
    },

    decimal: {
        /**
         * Gets an decimal between the given min and max values.
         * @param min
         * @param max
         * @param precision
         */
        between: function (min, max, precision, toString) {

            // Because our decimal will never be zero's so the max whole mumber wouldn't be valid
            max = max - 1;
            let int = Math.floor(Math.random() * (max - min + 1) + min).toString();

            let decimal = '';
            for (var i = 0; i < precision - 1; i++) {
                decimal += Math.floor(Math.random() * (9) + 0).toString();
            }
            decimal += Math.floor(Math.random() * (9) + 1).toString();

            let result = int + '.' + decimal;

            if (toString) {
                return result;
            } else {
                return parseFloat(result);
            }
        },

        /**
         * Gets an int of the given length.
         * @param length
         * @param precision
         * @disclaimer length applies to number of integer digits and doesn't count decimal places
         */
        ofLength: function (length, precision, toString) {

            let int = Math.floor(Math.random() * (9) + 1).toString();
            for (var i = 0; i < length - 1; i++) {
                int += Math.floor(Math.random() * (9) + 0).toString();
            }

            let decimal = '';
            for (var i = 0; i < precision - 1; i++) {
                decimal += Math.floor(Math.random() * (9) + 0).toString();
            }
            decimal += Math.floor(Math.random() * (9) + 1).toString();

            let result = int + '.' + decimal;

            if (toString) {
                return result;
            } else {
                return parseFloat(result);
            }
        }
    },

    natural: {

    }
    
};

// Returns a number and not a string like .toFixed()
// Number.prototype.toFixedNumber = function(x, base){
//     var pow = Math.pow(base||10,x);
//     return +( Math.round(this*pow) / pow );
// }