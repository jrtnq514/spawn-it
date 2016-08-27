/**
 * Created by JT on 8/25/16.
 */

var should = require('chai').should();

// module to test
var date = require('./../../lib/modules/date');
var dateConfig = require('./../../lib/modules/config/date');
var moment = require('moment');

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

    describe('year', function () {
        describe('full', function () {
            it('should return a year between 1900 and the current year', function (done) {
                let currentYear = moment().format('YYYY');
                let result = date.year.full();

                result.should.be.a('number');
                result.should.be.within(1900, currentYear);
                done();
            });

            it('should return a year between the provided min and max', function (done) {
                let min = 1800;
                let max = 2017;
                let result = date.year.full(min, max);

                result.should.be.a('number');
                result.should.be.within(min, max);
                done();
            });
        });

        describe('short', function () {
            it('should return the last two digits of a year (00 - 99)', function (done) {
                let result = date.year.short();
                
                result.should.be.a('string');
                result.should.be.within(0, 99);
                done();
            });
        });
    });
    
    describe('decade', function () {
        describe('full', function () {
            it('should return the full year value of a decade', function(done) {
                let result;

                for (var i = 0; i < 10; i++) {
                    result = date.decade.full();
                    result.should.be.a('string');
                }

                done();
            });
        });

        describe('short', function () {
            it('should return the short value of a decade', function(done) {
                let result = date.decade.short();

                result.should.be.a('string');
                done();
            });
        });

        describe('name', function () {
            it('should return the spelled out name of a decade', function(done) {
                let expectedNames = dateConfig.decadeNames;
                let result = date.decade.name();
                
                result.should.be.a('string');
                expectedNames.should.include(result);
                done();
            });
        });
    });
});