/**
 * Created by JT on 8/24/16.
 */
var should = require('chai').should();

// module to test
var number = require('./../../lib/modules/number');

describe('NUMBER', function () {
   
    describe('int', function () {
        describe('between', function () {
            it('should return an int between the entered range', function (done) {
                let min = 0;
                let max = 1000;
                let result = number.int.between(min, max);
                
                result.should.be.a('number');
                result.should.be.within(min, max);
                done();
            });
        });

        describe('ofLength', function () {
            it('should return an int of the length entered', function (done) {
                let length = 9;
                let result = number.int.ofLength(length);
                
                result.should.be.a('number');
                result.toString().length.should.equal(length);
                done();
            });
        });
    });

    describe('decimal', function () {
        describe('between', function () {
            it('should return an decimal between the entered range', function (done) {
                let min = 0;
                let max = 10;
                let precision = 5;
                let result = number.decimal.between(min, max, precision);
                let resultDecimals = result.toString().substring(result.toString().indexOf('.') + 1);

                result.should.be.a('number');
                result.should.be.within(min, max+1);
                resultDecimals.length.should.equal(precision);
                done();
            });

            it('should return an decimal between the entered range as a string', function (done) {
                let min = 0;
                let max = 1000;
                let precision = 5;
                let result = number.decimal.between(min, max, precision, true);
                let resultDecimals = result.substring(result.indexOf('.') + 1);
                
                result.should.be.a('string');
                result.should.be.within(min, max+1);
                resultDecimals.length.should.equal(precision);
                done();
            });
        });

        describe('ofLength', function () {
            it('should return a decimal of the length entered', function (done) {
                let length = 9;
                let precision = 3;
                let result = number.decimal.ofLength(length, precision);
                let resultDecimals = result.toString().substring(result.toString().indexOf('.') + 1);
                let resultInt = result.toString().substring(0, result.toString().indexOf('.'));

                result.should.be.a('number');
                result.toString().length.should.equal(length + precision + 1);
                resultDecimals.length.should.equal(precision);
                resultInt.length.should.equal(length);
                done();
            });

            it('should return a decimal of the length entered as a string', function (done) {
                let length = 9;
                let precision = 3;
                let result = number.decimal.ofLength(length, precision, true);
                let resultDecimals = result.toString().substring(result.toString().indexOf('.') + 1);
                let resultInt = result.substring(0, result.indexOf('.'));

                result.should.be.a('string');
                result.length.should.equal(length + precision + 1);
                resultDecimals.length.should.equal(precision);
                resultInt.length.should.equal(length);
                done();
            });
        });
    });
});