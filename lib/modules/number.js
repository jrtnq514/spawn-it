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
        between: function (min, max) {

        },

        ofLength: function (length) {

        }
    }
    
};
