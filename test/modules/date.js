/**
 * Created by JT on 8/25/16.
 */

var should = require('chai').should();

// module to test
var date = require('./../../lib/modules/date');
var dateConfig = require('./../../lib/modules/config/date');

describe('DATE', function () {

    describe('weekday', function () {
        describe('name', function () {
            it('should return the full name of a weekday', function (done) {
                let expectedNames = dateConfig.weekdays;
                let result = date.weekday.name();
                
                result.should.be.a('string');
                expectedNames.should.include(result);
                done();
            });
        });

        describe('abbr', function () {
            it('should return an abbreviation of a weekday', function (done) {
                let expectedNames = dateConfig.weekdaysAbbr;
                let result = date.weekday.abbr();

                result.should.be.a('string');
                expectedNames.should.include(result);
                done();
            });
        });

        describe('number', function () {
            it('should return a number representing a weekday', function (done) {
                let result = date.weekday.number();

                result.should.be.a('number');
                result.should.be.within(0, 6);
                done();
            });
        });

        describe('allNames', function () {
            it('should return an array containing the weekday names', function (done) {
                let expectedNames = dateConfig.weekdays;
                let result = date.weekday.allNames();

                result.should.be.an('array');
                result.should.equal(expectedNames);
                done();
            });
        });

        describe('allAbbr', function () {
            it('should return an array containing the weekday abbreviations', function (done) {
                let expectedNames = dateConfig.weekdaysAbbr;
                let result = date.weekday.allAbbr();

                result.should.be.an('array');
                result.should.equal(expectedNames);
                done();
            });
        });
    });

    describe('month', function () {
        describe('name', function () {
            it('should return the full name of a month', function (done) {
                let expectedNames = dateConfig.months;
                let result = date.month.name();

                result.should.be.a('string');
                expectedNames.should.include(result);
                done();
            });
        });

        describe('abbr', function () {
            it('should return an abbreviation of a month', function (done) {
                let expectedNames = dateConfig.monthsAbbr;
                let result = date.month.abbr();

                result.should.be.a('string');
                expectedNames.should.include(result);
                done();
            });
        });

        describe('number', function () {
            it('should return a number representing a month', function (done) {
                let result = date.month.number();

                result.should.be.a('number');
                result.should.be.within(1, 12);
                done();
            });
        });

        describe('allNames', function () {
            it('should return an array containing the month names', function (done) {
                let expectedNames = dateConfig.months;
                let result = date.month.allNames();

                result.should.be.an('array');
                result.should.equal(expectedNames);
                done();
            });
        });

        describe('allAbbr', function () {
            it('should return an array containing the month abbreviations', function (done) {
                let expectedNames = dateConfig.monthsAbbr;
                let result = date.month.allAbbr();

                result.should.be.an('array');
                result.should.equal(expectedNames);
                done();
            });
        });
    });
});