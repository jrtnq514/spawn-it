/**
 * Created by JT on 8/26/16.
 */
/**
 * Created by JT on 8/25/16.
 */
var should = require('chai').should();

// module to test
var person = require('./../../lib/modules/person');

// data
var personConfig = require('./../../lib/modules/config/person');

describe('PERSON', function () {

    describe('names', function () {

        describe('firstName', function() {

            describe('male', function () {

                it('should return a male first name as a string', function (done) {
                    let result = person.names.firstName('male');
                    let indexOfMaleFirstName = personConfig.male.indexOf(result.toUpperCase());

                    result.should.be.a('string');
                    indexOfMaleFirstName.should.not.equal(null);
                    indexOfMaleFirstName.should.not.equal(undefined);
                    indexOfMaleFirstName.should.not.equal(-1);
                    done();
                });

                it('should not return null or undefined male name', function (done) {
                    let result = person.names.firstName('male');
                    let indexOfMaleFirstName = personConfig.male.indexOf(result.toUpperCase());

                    result.should.be.a('string');
                    indexOfMaleFirstName.should.not.equal(null);
                    indexOfMaleFirstName.should.not.equal(undefined);
                    done();
                });

                it('should return name from original male list', function (done) {
                    let result = person.names.firstName('male');
                    let indexOfMaleFirstName = personConfig.male.indexOf(result.toUpperCase());

                    indexOfMaleFirstName.should.not.equal(-1);
                    done();
                });

            });

            describe('female', function() {

                it('should return a female first name as a string', function (done) {
                    let result = person.names.firstName('female');
                    let indexOfFemaleName = personConfig.female.indexOf(result.toUpperCase());

                    result.should.be.a('string');
                    indexOfFemaleName.should.not.equal(null);
                    indexOfFemaleName.should.not.equal(undefined);
                    indexOfFemaleName.should.not.equal(-1);
                    done();
                });

                it('should not return null or undefined female name', function (done) {
                    let result = person.names.firstName('female');
                    let indexOfFemaleName = personConfig.female.indexOf(result.toUpperCase());

                    result.should.be.a('string');
                    indexOfFemaleName.should.not.equal(null);
                    indexOfFemaleName.should.not.equal(undefined);
                    done();
                });

                it('should return name from original female list', function (done) {
                    let result = person.names.firstName('female');
                    let indexOfFemaleName = personConfig.female.indexOf(result.toUpperCase());

                    indexOfFemaleName.should.not.equal(-1);
                    done();
                });

            });

            describe('no specific gender', function() {

                it('should return a name even if passed in gender is invalid', function (done) {
                    // Passing invalid gender should still give a name
                    let result = person.names.firstName('idk');

                    result.should.not.equal(null);
                    result.should.not.equal(undefined);
                    done();
                });

                it('should return a name in the combined array of names', function(done) {
                    let names = personConfig.male.concat(personConfig.female);
                    let result = person.names.firstName('idk');
                    let indexName = names.indexOf(result.toUpperCase());

                    indexName.should.not.equal(-1);
                    done();
                });

            });

        });

        describe('lastName', function() {

            it('should not return null or undefined', function(done) {
                let result = person.names.lastName();

                result.should.not.equal(null);
                result.should.not.equal(undefined);
                done();
            });

            it('should return a name from the last name list', function(done) {
                let result = person.names.lastName();
                let indexName = personConfig.last.indexOf(result.toUpperCase());

                indexName.should.not.equal(-1);
                done();
            });

        });

    });

});