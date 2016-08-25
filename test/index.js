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
        done();
    });

    it('should have the property string', function (done) {
        spawn.should.have.deep.property('string');
        done();
    });
});

