/**
 * Created by JT on 8/31/16.
 */
var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect;

// module to test
var color = require('./../../lib/modules/color');

describe('COLOR', function () {

    describe('simple', function () {

        it('should return a random color', function (done) {
            let result = color.simple();

            result.should.be.a('string');
            result.length.should.equal(7);
            result.should.match(/^#[0-9A-Fa-f]{6}$/);
            done();
        });
    });

    describe('array', function () {

        it('should return an array of random colors', function (done) {
            let length = 10;
            let result = color.array(length);

            result.should.be.an('array');
            result.length.should.equal(length);

            for (var i in result) {
                result[i].should.match(/^#[0-9A-Fa-f]{6}$/);
            }
            done();
        });

        it('should return an error due to invalid range', function (done) {
            let length = 0;
            let array;

            color.array.bind(array, length).should.throw('Invalid length');
            done();
        });
    });

    describe('hue', function () {

        describe('simple', function () {

            it('should return a random color from the given hue', function (done) {
                let result = color.hue(color.HUES.blue).simple();

                result.should.be.a('string');
                result.length.should.equal(7);
                result.should.match(/^#[0-9A-Fa-f]{6}$/);
                done();
            });

            it('should return an error due to invalid hue', function (done) {
                let length = 10;
                let simple;
                let hue = 'invalid';

                color.hue(hue).simple.bind(simple).should.throw('Invalid hue');
                done();
            });
        });

        describe('array', function () {

            it('should return an array of random colors from the given hue', function (done) {
                let length = 10;
                let result = color.hue(color.HUES.blue).array(length);

                result.should.be.an('array');
                result.length.should.equal(length);

                for (var i in result) {
                    result[i].should.match(/^#[0-9A-Fa-f]{6}$/);
                }
                done();
            });

            it('should return an error due to invalid hue', function (done) {
                let length = 10;
                let array;
                let hue = 'invalid';

                color.hue(hue).array.bind(array, length).should.throw('Invalid hue');
                done();
            });

            it('should return an error due to invalid range', function (done) {
                let length = 0;
                let array;

                color.hue(color.HUES.pink).array.bind(array, length).should.throw('Invalid length');
                done();
            });
        });
    });

    describe('luminosity', function () {

        describe('simple', function () {

            it('should return a random color from the given luminosity', function (done) {
                let result = color.luminosity(color.LUMINOSITIES.light).simple();

                result.should.be.a('string');
                result.length.should.equal(7);
                result.should.match(/^#[0-9A-Fa-f]{6}$/);
                done();
            });

            it('should return an error due to invalid luminosity', function (done) {
                let length = 10;
                let simple;
                let luminostiy = 'invalid';

                color.luminosity(luminostiy).simple.bind(simple).should.throw('Invalid luminosity');
                done();
            });
        });

        describe('array', function () {

            it('should return an array of random colors from the given luminosity', function (done) {
                let length = 10;
                let result = color.luminosity(color.LUMINOSITIES.light).array(length);

                result.should.be.an('array');
                result.length.should.equal(length);

                for (var i in result) {
                    result[i].should.match(/^#[0-9A-Fa-f]{6}$/);
                }
                done();
            });

            it('should return an error due to invalid luminosity', function (done) {
                let length = 10;
                let array;
                let luminosity = 'invalid';

                color.luminosity(luminosity).array.bind(array, length).should.throw('Invalid luminosity');
                done();
            });

            it('should return an error due to invalid range', function (done) {
                let length = 0;
                let array;

                color.luminosity(color.LUMINOSITIES.dark).array.bind(array, length).should.throw('Invalid length');
                done();
            });
        });
    });

    describe('hueAndLuminosity', function () {

        describe('simple', function () {

            it('should return a random color from the given hue and luminosity', function (done) {
                let result = color.hueAndLuminosity(color.HUES.green, color.LUMINOSITIES.light).simple();

                result.should.be.a('string');
                result.length.should.equal(7);
                result.should.match(/^#[0-9A-Fa-f]{6}$/);
                done();
            });

            it('should return an error due to invalid luminosity', function (done) {
                let length = 10;
                let simple;
                let luminosity = 'invalid';

                color.hueAndLuminosity(color.HUES.blue, luminosity).simple.bind(simple, length).should.throw('Invalid luminosity');
                done();
            });

            it('should return an error due to invalid hue', function (done) {
                let length = 10;
                let simple;
                let hue = 'invalid';

                color.hueAndLuminosity(hue, color.LUMINOSITIES.dark).simple.bind(simple, length).should.throw('Invalid hue');
                done();
            });
        });

        describe('array', function () {

            it('should return an array of random colors from the given hue and luminosity', function (done) {
                let length = 10;
                let result = color.hueAndLuminosity(color.HUES.green, color.LUMINOSITIES.light).array(length);

                result.should.be.an('array');
                result.length.should.equal(length);

                for (var i in result) {
                    result[i].should.match(/^#[0-9A-Fa-f]{6}$/);
                }
                done();
            });

            it('should return an error due to invalid luminosity', function (done) {
                let length = 10;
                let array;
                let luminosity = 'invalid';

                color.hueAndLuminosity(color.HUES.blue, luminosity).array.bind(array, length).should.throw('Invalid luminosity');
                done();
            });

            it('should return an error due to invalid hue', function (done) {
                let length = 10;
                let array;
                let hue = 'invalid';

                color.hueAndLuminosity(hue, color.LUMINOSITIES.dark).array.bind(array, length).should.throw('Invalid hue');
                done();
            });

            it('should return an error due to invalid range', function (done) {
                let length = 0;
                let array;

                color.hueAndLuminosity(color.HUES.green, color.LUMINOSITIES.dark).array.bind(array, length).should.throw('Invalid length');
                done();
            });
        });
    });
});