/**
 * Created by JT on 8/25/16.
 */
var should = require('chai').should();

// module to test
var string = require('./../../lib/modules/string');

// data
var stringConfig = require('./../../lib/modules/config/string');

describe('STRING', function () {

    describe('names', function () {
        describe('firstName - male', function () {
            it('should return a male first name as a string', function (done) {
                let result = string.names.firstName('male');
                let indexOfMaleFirstName = stringConfig.male.indexOf(result.toUpperCase());

                result.should.be.a('string');
                indexOfMaleFirstName.should.not.equal(null);
                indexOfMaleFirstName.should.not.equal(undefined);
                indexOfMaleFirstName.should.not.equal(-1);
                done();
            });

            it('should not return null or undefined male name', function (done) {
                let result = string.names.firstName('male');
                let indexOfMaleFirstName = stringConfig.male.indexOf(result.toUpperCase());

                result.should.be.a('string');
                indexOfMaleFirstName.should.not.equal(null);
                indexOfMaleFirstName.should.not.equal(undefined);
                done();
            });

            it('should return name from original male list', function (done) {
                let result = string.names.firstName('male');
                let indexOfMaleFirstName = stringConfig.male.indexOf(result.toUpperCase());

                indexOfMaleFirstName.should.not.equal(-1);
                done();
            });
        });

        describe('firstName - female', function() {
            it('should return a female first name as a string', function (done) {
                let result = string.names.firstName('female');
                let indexOfFemaleName = stringConfig.female.indexOf(result.toUpperCase());

                result.should.be.a('string');
                indexOfFemaleName.should.not.equal(null);
                indexOfFemaleName.should.not.equal(undefined);
                indexOfFemaleName.should.not.equal(-1);
                done();
            });

            it('should not return null or undefined female name', function (done) {
                let result = string.names.firstName('female');
                let indexOfFemaleName = stringConfig.female.indexOf(result.toUpperCase());

                result.should.be.a('string');
                indexOfFemaleName.should.not.equal(null);
                indexOfFemaleName.should.not.equal(undefined);
                done();
            });

            it('should return name from original female list', function (done) {
                let result = string.names.firstName('female');
                let indexOfFemaleName = stringConfig.female.indexOf(result.toUpperCase());

                indexOfFemaleName.should.not.equal(-1);
                done();
            });
        });
    });
});