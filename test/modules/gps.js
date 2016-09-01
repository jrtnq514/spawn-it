/**
 * Created by JT on 8/30/16.
 */
var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect;

// module to test
var gps = require('./../../lib/modules/gps');

describe('GPS', function () {

    describe('stream', function () {
        it('should return a stream of gps sentences', function (done) {
            let length = 25;
            let result = gps.stream(length);

            result.should.be.a('string');
            let numberOfSentences = result.split('\r\n');
            numberOfSentences.length.should.equal(length);
            done();
        });

        it('should return a stream of gps sentences with the given messageTypes', function (done) {
            let length = 25;
            let messageTypes = [ 'GGA', 'GSA' ];
            let result = gps.stream(length, messageTypes);

            result.should.be.a('string');
            let numberOfSentences = result.split('\r\n');
            numberOfSentences.length.should.equal(length);
            done();
        });

    });

    describe('GGA', function () {
        it('should return a stream of gps GGA sentences', function (done) {
            let length = 25;
            let result = gps.GGA(length);

            result.should.be.a('string');
            let arrayOfSentences = result.split('\r\n');
            arrayOfSentences.length.should.equal(length);

            for (var i in arrayOfSentences) {
                arrayOfSentences[i].substring(0, arrayOfSentences[i].indexOf(',')).should.equal('$GPGGA');
            }

            done();
        });

    });
});