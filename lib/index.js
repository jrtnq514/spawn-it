/**
 * Created by JT on 8/22/16.
 */

var number = require('./modules/number');
var text = require('./modules/text');
var boolean = require('./modules/boolean');
var date = require('./modules/date');
var person = require('./modules/person');
var location = require('./modules/location');
var color = require('./modules/color');

var spawn = {
    // Number
    number: number,

    // String
    text: text,
    
    // Boolean
    boolean: boolean,

    // Date
    date: date,

    // Person
    person: person,

    // Location
    location: location,

    // Color
    color: color
};

module.exports = spawn;