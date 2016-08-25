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

            it('should return an int of the length entered', function (done) {
                let length = 9;
                let result = number.int.ofLength(length);
                result.should.be.a('number');
                result.toString().length.should.equal(length);
                done();
            });
        });

        describe('between', function () {
    
        });
    });
});