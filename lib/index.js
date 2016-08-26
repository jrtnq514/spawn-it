/**
 * Created by JT on 8/22/16.
 */

var number = require('./modules/number');
var string = require('./modules/string');
var boolean = require('./modules/boolean');
var date = require('./modules/date');

var spawn = {
    // Number
    number: number,

    // String
    string: string,
    
    // Boolean
    boolean: boolean,

    // Date
    date: date
};

module.exports = spawn;