/**
 * Created by JT on 8/26/16.
 */
var number = require('./number');
var text = require('./text');

var personConfig = require('./config/person');
var maleNames = personConfig.male;
var femaleNames = personConfig.female;
var lastNames = personConfig.last;

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
            return text.utility.capitalizeFirst(name);
        },

        /**
         * Gets a random last name
         */
        lastName: function() {
            var name = lastNames[number.int.between(0, lastNames.length-1)].toLowerCase();
            return text.utility.capitalizeFirst(name);
        }
    },
    
    attributes: {

        age: function(min, max) {
            if(min != null && max != null) {
                return number.int.between(min, max);
            } else {
                return number.int.between(1, 110);
            }
        }
    }

};