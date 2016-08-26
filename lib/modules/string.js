var number = require('./number');

var stringConfig = require('./config/string');
var maleNames = stringConfig.male;
var femaleNames = stringConfig.female;
var lastNames = stringConfig.last;

module.exports = {

    names: {

        /**
         * Gets a first name with optional parameter of gender type.
         * @param gender
         */
        firstName: function(gender) {
            var name;
            if (typeof gender == 'string' && gender.toLowerCase() === 'male') {
                name = maleNames[number.int.between(0, maleNames.length-1)].toLowerCase();
                return name.charAt(0).toUpperCase() + name.slice(1);
            } else if (typeof gender == 'string' && gender.toLowerCase() === 'female') {
                name = femaleNames[number.int.between(0, femaleNames.length-1)].toLowerCase();
                return name.charAt(0).toUpperCase() + name.slice(1);
            } else {
                var names = maleNames.concat(femaleNames);
                return names[number.int.between(0, names.length-1)];
            }
        },

        /**
         * Gets a random last name
         */
        lastName: function() {
            var name = lastNames[number.int.between(0, lastNames.length-1)].toLowerCase();
            return name.charAt(0).toUpperCase() + name.slice(1);
        }

    }

};