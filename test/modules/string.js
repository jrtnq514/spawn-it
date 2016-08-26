/**
 * Created by JT on 8/25/16.
 */
var should = require('chai').should();
var expect = require('chai').expect;

// module to test
var string = require('./../../lib/modules/string');

// data
var stringConfig = require('./../../lib/modules/config/string');

describe('STRING', function () {

    describe('names', function () {

        describe('firstName', function() {

            describe('male', function () {

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

            describe('female', function() {

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

            describe('no specific gender', function() {

                it('should return a name even if passed in gender is invalid', function (done) {
                    // Passing invalid gender should still give a name
                    let result = string.names.firstName('idk');

                    result.should.not.equal(null);
                    result.should.not.equal(undefined);
                    done();
                });

                it('should return a name in the combined array of names', function(done) {
                    let names = stringConfig.male.concat(stringConfig.female);
                    let result = string.names.firstName('idk');
                    let indexName = names.indexOf(result.toUpperCase());

                    indexName.should.not.equal(-1);
                    done();
                });

            });

        });

        describe('lastName', function() {

            it('should not return null or undefined', function(done) {
                let result = string.names.lastName();

                result.should.not.equal(null);
                result.should.not.equal(undefined);
                done();
            });

            it('should return a name from the last name list', function(done) {
                let result = string.names.lastName();
                let indexName = stringConfig.last.indexOf(result.toUpperCase());

                indexName.should.not.equal(-1);
                done();
            });

        });

    });

    describe('utility', function() {

        describe('capitalize', function() {

            describe('type, null, undefined, empty string', function() {

                it('should return null if not passed a string', function(done) {
                    var result = string.utility.capitalize(123);
                    expect(result).to.equal(null);

                    result = string.utility.capitalize(true);
                    expect(result).to.equal(null);

                    done();
                });

                it('should return null if passed null', function(done) {
                    var result = string.utility.capitalize(null);
                    expect(result).to.equal(null);
                    done();
                });

                it('should return null if passed undefined', function(done) {
                    var result = string.utility.capitalize(undefined);
                    expect(result).to.equal(null);
                    done();
                });

                it('should return empty string if passed empty string', function(done) {
                    var result = string.utility.capitalize('');
                    expect(result).to.equal('');
                    done();
                });

            });

            describe('valid string passed in', function() {

                it('should return a capitalized version of string passed in', function(done) {
                    var result = string.utility.capitalize('nathan');
                    expect(result).to.equal('Nathan');
                    done();
                });

                it('should only change first character', function(done) {
                    var result = string.utility.capitalize('naThAn');
                    expect(result).to.equal('NaThAn');
                    done();
                });

            });

        });

    });

});