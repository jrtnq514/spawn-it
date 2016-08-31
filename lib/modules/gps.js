/**
 * Created by JT on 8/28/16.
 */
var moment = require('moment');
var number = require('./number');
var gpsConfig = require('./config/gps');
var gpsHelper = require('./helper/gps');

module.exports = {

    stream: function (length, messageTypes) {
        let talkerId = '$GP';
        let CRLF = String.fromCharCode(13, 10);
        let stream = '';

        // global properties for different message types
        let currentTime = moment.utc().format('HHmmss.SS');
        let currentLat = { degree: gpsHelper.randomLat(), direction: gpsConfig.latDirections[number.int.between(0, 1)] };
        let currentLong = { degree: gpsHelper.randomLong(), direction: gpsConfig.longDirections[number.int.between(0, 1)] };

        for (var i = 0; i < length; i++) {
            let messageType = gpsConfig.messageTypes[i % gpsConfig.messageTypes.length];
            let sentence = '';
            
            switch (messageType) {
                case 'GGA':
                    sentence += gpsHelper.GGA(talkerId, currentTime, currentLat, currentLong);
                    break;
                case 'GSA':
                    
                    break;
                case 'GSV':
                    
                    break;
                default:
                    
                    break;
            }

            if (i === 0) {
                stream += sentence;
            } else {
                stream += CRLF + sentence;
            }
            
            // lets go somewhere
            currentTime = moment.utc(currentTime, 'HHmmss.SS').add(number.int.between(0, 200), 'milliseconds').format('HHmmss.SS');
            currentLat.degree = (parseFloat(currentLat.degree) + number.decimal.between(-0.5, 0.5, 4)).toFixed(4);
            currentLong.degree = (parseFloat(currentLong.degree) + number.decimal.between(-0.5, 0.5, 4)).toFixed(4);
        }
        
        return stream;

    },

    GGA: function (length) {
        let talkerId = '$GP';
        let CRLF = String.fromCharCode(13, 10);
        let stream = '';

        // global properties for different message types
        let currentTime = moment.utc().format('HHmmss.SS');
        let currentLat = { degree: gpsHelper.randomLat(), direction: gpsConfig.latDirections[number.int.between(0, 1)] };
        let currentLong = { degree: gpsHelper.randomLong(), direction: gpsConfig.longDirections[number.int.between(0, 1)] };

        for (var i = 0; i < length; i++) {
            let sentence = '';

            sentence += gpsHelper.GGA(talkerId, currentTime, currentLat, currentLong);

            if (i === 0) {
                stream += sentence;
            } else {
                stream += CRLF + sentence;
            }

            // lets go somewhere
            currentTime = moment.utc(currentTime, 'HHmmss.SS').add(number.int.between(0, 200), 'milliseconds').format('HHmmss.SS');
            currentLat.degree = (parseFloat(currentLat.degree) + number.decimal.between(-0.5, 0.5, 4)).toFixed(4);
            currentLong.degree = (parseFloat(currentLong.degree) + number.decimal.between(-0.5, 0.5, 4)).toFixed(4);
        }

        return stream;
    }


};