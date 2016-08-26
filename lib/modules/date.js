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

    }

};