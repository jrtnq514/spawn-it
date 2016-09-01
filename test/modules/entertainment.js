/**
 * Created by JT on 8/31/16.
 */
var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect;

// module to test
var entertainment = require('./../../lib/modules/entertainment');

var entertainmentConfig = require('./../../lib/modules/config/entertainment');
var movies = entertainmentConfig.movies;

describe('ENTERTAINMENT', function () {

    describe('movie', function () {

        it('not null, undefined or non-object', function (done) {
            let result = entertainment.movie();
            result.should.be.a('object');
            result.should.not.equal(null);
            result.should.not.equal(undefined);
            done();
        });

        it('should return a movie from the list', function (done) {
            let result = entertainment.movie();
            let index = movies.indexOf(result);
            index.should.not.equal(-1);
            done();
        });

        it('should return a movie from 1997', function (done) {
            let result = entertainment.movie({year: '1997'});
            result.year.should.equal('1997');
            done();
        });

        it('should return a movie from studio', function(done) {
            let result = entertainment.movie({studio: 'Fox'});
            result.studio.should.equal('Fox');
            done();
        });

    });

});