var number = require('./number');

module.exports = {

    char: {

    },

    utility: {

        /**
         * Capitalizes the first character of a string.
         * @param str
         * @param lowerCase: make rest of the string lower case (true|false)
         * @returns {*}
         */
        capitalize: function(str, lowerCase) {
            if (str === undefined || str === null || typeof str != 'string')
                return null;
            else if (str.length === 0)
                return '';
            else
                if (lowerCase) str = str.toLowerCase();
                return str.charAt(0).toUpperCase() + str.slice(1);
        }

    }

};