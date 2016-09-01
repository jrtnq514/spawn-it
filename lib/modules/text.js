var number = require('./number');
var textConfig = require('./config/text');

module.exports = {

    char: function(charCase) {
        let char = textConfig.chars[number.int.between(0, textConfig.chars.length - 1)];
        
        if (charCase === 'upper') {
            char = char.toUpperCase();
        } else if (charCase === 'lower') {
            char = char.toLowerCase();
        }
        
        return char;
    },
    
    string: {

        between: function (min, max) {
            let string = "";
            let length = number.int.between(min, max);
            
            for (var i = 0; i < length; i++) {
                string += textConfig.chars[number.int.between(0, textConfig.chars.length - 1)];
            }
            
            return string;
        },

        ofLength: function (length) {
            let string = "";

            for (var i = 0; i < length; i++) {
                string += textConfig.chars[number.int.between(0, textConfig.chars.length - 1)];
            }

            return string;
        },
        
        random: function () {
            let string = "";
            let length = number.int.between(2, 100);

            for (var i = 0; i < length; i++) {
                string += textConfig.chars[number.int.between(0, textConfig.chars.length - 1)];
            }

            return string;
        }
    },

    utility: {

        /**
         * Capitalizes the first character of a string.
         * @param str
         * @param lowerCaseFirst: make rest of the string lower case (true|false)
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