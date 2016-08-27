/**
 * Created by JT on 8/25/16.
 */
var should = require('chai').should();
var expect = require('chai').expect;

// module to test
var text = require('./../../lib/modules/text');

describe('TEXT', function () {

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