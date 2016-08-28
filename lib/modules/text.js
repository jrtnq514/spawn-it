var number = require('./number');
var textConfig = require('./config/text');

module.exports = {

    char: function(charCase) {
        let char = textConfig.chars[number.int.between(0, textConfig.chars.length - 1)];
        console.log(charCase);
        if (charCase === 'upper') {
            char = char.toUpperCase();
        } else if (charCase === 'lower') {
            char = char.toLowerCase();
        }
        
        return char;
    },

    utility: {

        /**
         * Capitalizes the first character of a string.
         * @param str
         * @param lowerCase: make rest of the string lower case (true|false)
         * @returns {*}
         */
        capitalizeFirst: function(str, lowerCaseFirst) {
            if (str === undefined || str === null || typeof str != 'string')
                return null;
            else if (str.length === 0)
                return '';
            else
                if (lowerCaseFirst) str = str.toLowerCase();
                return str.charAt(0).toUpperCase() + str.slice(1);
        }

    }

};