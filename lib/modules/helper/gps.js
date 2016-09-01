/**
 * Created by JT on 8/28/16.
 */
var gpsConfig = require('./../config/gps');
var number = require('./../number');
var leftPad = require('left-pad');

module.exports = {

    // RMC: function () {
    //    
    // },
    
    GGA: function (talkerId, currentTime, currentLat, currentLong) {
        let message = talkerId + 'GGA,';

        //                                                11
        //  1         2      3 4        5 6 7  8   9   10 |  12 13  14   15
        //  |         |      | |        | | |  |   |   |  |  |  |   |    |
        // hhmmss.ss,llll.ll,a,yyyyy.yy,a,x,xx,x.x,x.x,M,x.x,M,x.x,xxxx*hh
        // 1) Time (UTC)
        message += currentTime + ',';

        // 2) Latitude
        message += currentLat.degree + ',';

        // 3) N or S (North or South)
        message += currentLat.direction + ',';

        // 4) Longitude
        message += currentLong.degree + ',';
        
        // 5) E or W (East or West)
        message += currentLong.direction + ',';
        
        // 6) GPS Quality Indicator,
        // 0 - fix not available,
        // 1 - GPS fix,
        // 2 - Differential GPS fix
        message += number.int.between(1, 1).toString() + ',';

        // 7) Number of satellites in view, 00 - 12
        message += leftPad(number.int.between(0, 12), 2, 0) + ',';

        // 8) Horizontal Dilution of precision
        message += number.decimal.between(0.1, 9.9, 1, true) + ',';

        // 9) Antenna Altitude above/below mean-sea-level (geoid)
        message += number.decimal.between(-413, 1000, 1, true) + ',';

        // 10) Units of antenna altitude, meters
        message += 'M,';

        // 11) Geoidal separation, the difference between the WGS-84 earth ellipsoid and mean-sea-level (geoid), "-" means mean-sea-level below ellipsoid
        message += number.decimal.between(-50, 50, 1, true) + ',';

        // 12) Units of geoidal separation, meters
        message += 'M,';

        // 13) Age of differential GPS data, time in seconds since last SC104 type 1 or 9 update, null field when DGPS is not used
        message += ',';

        // 14) Differential reference station ID, 0000-1023
        message += ',';

        // 15) Checksum
        message += '*';
        message += module.exports.calcuateChecksum(message);



        return message;
    },
    
    // GLL: function () {
    //    
    // },
    //
    // GSA: function () {
    //    
    // },
    //
    // GSV: function () {
    //    
    // },
    //
    // ZDA: function () {
    //
    // },

    randomLat: function () {
        let lat;

        lat = leftPad(number.int.between(0, 90), 2, 0).toString()
            + leftPad(number.int.between(0, 60), 2, 0).toString() + '.'
            + leftPad(number.int.between(0, 60), 4, 0).toString();
        return lat;
    },

    randomLong: function () {
        let long;

        long = leftPad(number.int.between(0, 180), 3, 0).toString()
            + leftPad(number.int.between(0, 60), 2, 0).toString() + '.'
            + leftPad(number.int.between(0, 60), 4, 0).toString();
        return long;

    },

    calcuateChecksum: function (message) {
        let valueToCheckSum = message.substring(message.indexOf('$') + 1, message.indexOf('*')).replace(/,|\.|-/g , '');

        // Compute the checksum by XORing all the character values in the string.
        var checksum = 0;
        for(var i = 0; i < valueToCheckSum.length; i++) {
            checksum = checksum ^ valueToCheckSum.charCodeAt(i);
        }

        // Convert it to hexadecimal (base-16, upper case, most significant nybble first).
        var hexsum = Number(checksum).toString(16).toUpperCase();
        if (hexsum.length < 2) {
            hexsum = ("00" + hexsum).slice(-2);
        }

        return hexsum;
    }

};