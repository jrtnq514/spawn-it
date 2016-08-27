/**
 * Created by JT on 8/25/16.
 */
var should = require('chai').should();

// module to test
var boolean = require('./../../lib/modules/boolean');

describe('BOOLEAN', function () {

    describe('simple', function () {
        it('should return a boolean', function (done) {
            let result = boolean.simple();

            result.should.be.a('boolean');
            done();
        });
    });

    describe('array', function () {
        it('should return an array of booleans', function (done) {
            let length = 8;
            let result = boolean.array(length);

            result.should.be.an('array');
            for(var index in result) {
                result[index].should.be.a('boolean');
            }
            result.length.should.equal(length);
            done();
        });
    });

    describe('coinflip', function () {
        it('should return a side of a coin (heads, tails)', function (done) {
            let result;
            let expected = [ 'heads', 'tails' ];

            for (var i = 0; i < 10; i++)
            {
                result = boolean.coinFlip();
                result.should.be.a('string');
                expected.should.include(result);
            }

            done();
        });
    });

    describe('bit', function () {
        it('should return a bit value', function (done) {
            let result;

            for (var i = 0; i < 10; i++) {
                result = boolean.bit();
                result.should.be.a('number');
                result.should.be.within(0, 1);
            }

            done();
        });
    });
});