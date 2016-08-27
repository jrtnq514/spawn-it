/**
 * Created by JT on 8/22/16.
 */

var number = require('./modules/number');
var string = require('./modules/string');
var boolean = require('./modules/boolean');
var date = require('./modules/date');
var person = require('./modules/person');

var spawn = {
    // Number
    number: number,

    // String
    string: string,
    
    // Boolean
    boolean: boolean,

    // Date
    date: date,

    // Person
    person: person
};

module.exports = spawn;


