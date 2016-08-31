/**
 * Created by JT on 8/26/16.
 */

 var chai = require('chai'),
     should = chai.should(),
     expect = chai.expect,
     assert = chai.assert;

var location = require('./../../lib/modules/location');

var locationConfig = require('./../../lib/modules/config/location');
var planets = locationConfig.planets;
var countries = locationConfig.countries;
var continents = locationConfig.continents;

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

        it('returns valid planet', function(done) {
            var planet = location.planet();
            expect(planets.indexOf(planet)).to.not.equal(-1);
            done();
        });

    });

    describe('country', function() {

        it('should return a string', function(done) {
            var country = location.country();
            expect(country).to.be.a('string');
            expect(country).to.not.equal(null);
            expect(country).to.not.equal(undefined);
            done();
        });

        it('returns valid country', function(done) {
            var country = location.country();
            expect(countries.indexOf(country)).to.not.equal(-1);
            done();
        });

    });

    describe('continent', function() {

        it('should return a string', function(done) {
            var continent = location.continent();
            expect(continent).to.be.a('string');
            expect(continent).to.not.equal(null);
            expect(continent).to.not.equal(undefined);
            done();
        });

        it('returns valid continent', function(done) {
            var continent = location.continent();
            expect(continents.indexOf(continent)).to.not.equal(-1);
            done();
        });

    });

});
