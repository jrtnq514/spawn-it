/**
 * Created by JT on 8/25/16.
 */
var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect;

// module to test
var text = require('./../../lib/modules/text');
var textConfig = require('./../../lib/modules/config/text');

describe('TEXT', function () {

    describe('char', function () {

        it('should return a char', function (done) {
            let result = text.char();
            let expectedChars = textConfig.chars;

            result.should.be.a('string');
            expectedChars.should.include(result);
            done();
        });
        
        it('should return a lowercase char', function (done) {
            let result = text.char('lower');
            let resultLower = result.toLowerCase();
            let expectedChars = textConfig.chars;

            result.should.be.a('string');
            result.should.equal(resultLower);
            expectedChars.should.include(result);
            done();
        });

        it('should return a uppercase char', function (done) {
            let result = text.char('upper');
            let resultUpper = result.toUpperCase();
            let expectedChars = textConfig.chars.toUpperCase();

            result.should.be.a('string');
            result.should.equal(resultUpper);
            expectedChars.should.include(result);
            done();
        });
    });

    describe('string', function () {

        describe('between', function () {
            it('should return a string between the min and max length', function (done) {
                let result = text.string.between(10, 20);

                result.should.be.a('string');
                result.length.should.be.within(10, 20);
                done();
            });
        });

        describe('ofLength', function () {
            it('should return a string of the provided length', function (done) {
                let result = text.string.ofLength(15);

                result.should.be.a('string');
                result.length.should.equal(15);
                done();
            });
        });

        describe('random', function () {
            it('should return a string between the boundaries (2, 100)', function (done) {
                let result = text.string.random();

                result.should.be.a('string');
                result.length.should.be.within(2, 100);
                done();
            });
        });
    });

    describe('utility', function() {

        describe('capitalizeFirst', function() {

            describe('type, null, undefined, empty string', function() {

                it('should return null if not passed a string', function(done) {
                    var result = text.utility.capitalizeFirst(123);
                    expect(result).to.equal(null);

                    result = text.utility.capitalizeFirst(true);
                    expect(result).to.equal(null);

                    done();
                });

                it('should return null if passed null', function(done) {
                    var result = text.utility.capitalizeFirst(null);
                    expect(result).to.equal(null);
                    done();
                });

                it('should return null if passed undefined', function(done) {
                    var result = text.utility.capitalizeFirst(undefined);
                    expect(result).to.equal(null);
                    done();
                });

                it('should return empty string if passed empty string', function(done) {
                    var result = text.utility.capitalizeFirst('');
                    expect(result).to.equal('');
                    done();
                });

            });

            describe('valid string passed in', function() {

                it('should return a capitalized version of string passed in', function(done) {
                    var result = text.utility.capitalizeFirst('nathan');
                    expect(result).to.equal('Nathan');
                    done();
                });

                it('should only change first character', function(done) {
                    var result = text.utility.capitalizeFirst('naThAn');
                    expect(result).to.equal('NaThAn');
                    done();
                });

                it('should change the string to lowercase and capitalize the first character', function(done) {
                    var result = text.utility.capitalizeFirst('naThAn', true);
                    expect(result).to.equal('Nathan');
                    done();
                });

            });

        });

    });

});