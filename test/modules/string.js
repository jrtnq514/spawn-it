/**
 * Created by JT on 8/25/16.
 */
var should = require('chai').should();

// module to test
var string = require('./../../lib/modules/string');

describe('STRING', function () {

    describe('names', function () {
        describe('firstName', function () {
            it('should return a male first name as a string', function (done) {
                let result = string.names.firstName('male');

                result.should.be.a('string');
                done();
            });

            it('should return a female first name as a string', function (done) {
                let result = string.names.firstName('female');

                result.should.be.a('string');
                done();
            });
        });
    });
});