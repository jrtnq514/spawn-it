/**
 * Created by JT on 8/25/16.
 */
var moment = require('moment');
var number = require('./number');
var dateConfig = require('./config/date');

module.exports = {

    weekday: {

        name: function () {
            let offset = number.int.between(0, 6);
            
            return moment().add(offset, 'days').format('dddd');
        },

        abbr: function () {
            let offset = number.int.between(0, 6);

            return moment().add(offset, 'days').format('ddd');
        },

        number: function () {
            return number.int.between(0, 6);
        },

        allNames: function () {
            return dateConfig.weekdays;
        },

        allAbbr: function () {
            return dateConfig.weekdaysAbbr;
        }
    },

    month: {
        
        name: function () {
            let offset = number.int.between(0, 11);

            return moment().add(offset, 'months').format('MMMM');
        },

        abbr: function () {
            let offset = number.int.between(0, 11);

            return moment().add(offset, 'months').format('MMM');
        },

        number: function () {
            return number.int.between(1, 12);
        },

        allNames: function () {
            return dateConfig.months;
        },

        allAbbr: function () {
            return dateConfig.monthsAbbr;
        }
    },

    year: {

        full: function (min, max) {
            let year = null;
            
            if (min != null && max != null) {
                year = number.int.between(min, max);
            } else {
                year = number.int.between(1900, moment().get('year'));
            }
            
            return year;
        },

        short: function () {
            return number.int.between(0, 9).toString() + number.int.between(0, 9).toString();
        }
    },

    decade: {
        full: function () {
            let decade = number.int.between(19, 20);
            let currentDecade = parseInt(moment().format('YYYY')[2]);
            
            if (decade === 20){
                decade += number.int.between(0, currentDecade).toString() + 0 + "'s";
            } else {
                decade += number.int.between(0, 9).toString() + 0 + "'s";
            }

            return decade;
        },
        
        short: function () {
            return number.int.between(0, 9).toString() + 0 + "'s";
        },
        
        name: function () {
            let i = number.int.between(0, dateConfig.decadeNames.length - 1);
            
            return dateConfig.decadeNames[i];
        }
    },

    // century: {
    //     full: function () {
    //        
    //     },
    //    
    //     name: function () {
    //        
    //     }
    // }

};