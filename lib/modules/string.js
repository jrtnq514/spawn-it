var number = require('./number');

var stringConfig = require('./config/string');
var maleNames = stringConfig.male;
var femaleNames = stringConfig.female;
var lastNames = stringConfig.last;

module.exports = {

    names: {

        /**
         * Gets a first name with optional parameter of gender type.
         * @param gender: 'male' or 'female'
         */
        firstName: function(g) {
            var gender = null;

            // Determine which gender is being passed in.
            if (g != undefined && typeof g == 'string' && g != null && g.length >= 4) {
                gender = g.toLowerCase();

                if (gender != 'male' && gender != 'female') {
                    if (gender[0] == 'f') gender = 'female';
                    else gender = 'male';
                }
            }

            var name;
            if (gender === 'male') {
                name = maleNames[number.int.between(0, maleNames.length-1)].toLowerCase();
            } else if (gender === 'female') {
                name = femaleNames[number.int.between(0, femaleNames.length-1)].toLowerCase();
            } else {
                var names = maleNames.concat(femaleNames);
                name = names[number.int.between(0, names.length - 1)];
            }
            return module.exports.utility.capitalize(name);
        },

        /**
         * Gets a random last name
         */
        lastName: function() {
            var name = lastNames[number.int.between(0, lastNames.length-1)].toLowerCase();
            return module.exports.utility.capitalize(name);
        }

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