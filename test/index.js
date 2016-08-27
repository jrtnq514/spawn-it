/**
 * Created by JT on 8/22/16.
 */

var should = require('chai').should();

// module to test
var spawn = require('./../lib/index');

describe('SPAWN', function () {

    it('should return an object', function (done) {
        spawn.should.be.an('object');
        done();
    });

    it('should have the property number', function (done) {
        spawn.should.have.deep.property('number');
        spawn.should.have.deep.property('number.int');
        spawn.should.have.deep.property('number.decimal');
        done();
    });

    it('should have the property text', function (done) {
        spawn.should.have.deep.property('text');
        spawn.should.have.deep.property('text.utility');
        done();
    });

    it('should have the property boolean', function (done) {
        spawn.should.have.deep.property('boolean');
        done();
    });

    it('should have the property date', function (done) {
        spawn.should.have.deep.property('date');
        spawn.should.have.deep.property('date.weekday');
        spawn.should.have.deep.property('date.month');
        spawn.should.have.deep.property('date.year');
        spawn.should.have.deep.property('date.decade');
        done();
    });

    it('should have the property person', function (done) {
        spawn.should.have.deep.property('person');
        spawn.should.have.deep.property('person.names');
        done();
    });
});