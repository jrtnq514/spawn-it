/**
 * Created by JT on 8/26/16.
 */

 var chai = require('chai'),
     should = chai.should(),
     expect = chai.expect,
     assert = chai.assert;

var location = require('./../../lib/modules/location');

describe('LOCATION', function() {

    describe('city', function() {

        describe('with state code', function() {
            it('should return a string', function(done) {
                var city = location.city('MO');
                expect(city).to.be.a('string');
                expect(city).to.not.equal(null);
                expect(city).to.not.equal(undefined);
                done();
            });
        });

        describe('without state code', function() {
            it('should return a string', function(done) {
                var city = location.city();
                expect(city).to.be.a('string');
                expect(city).to.not.equal(null);
                expect(city).to.not.equal(undefined);
                done();
            });
        });

    });

    describe('state', function() {

        it('should return an object', function(done) {
            var state = location.state();
            expect(state).to.be.a('object');
            expect(state).to.not.equal(null);
            expect(state).to.not.equal(undefined);
            done();
        });

        it('should return a state and a code', function(done) {
            var state = location.state();
            expect(state.code).to.not.equal(undefined);
            expect(state.state).to.not.equal(undefined);
            done();
        });

    });

    describe('planet', function() {

        it('should return a string', function(done) {
            var planet = location.planet();
            expect(planet).to.be.a('string');
            expect(planet).to.not.equal(null);
            expect(planet).to.not.equal(undefined);
            done();
        });

    });

});
