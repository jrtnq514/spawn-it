/**
 * Created by DS on 8/29/16.
 */

let clone = require('clone');
let spawn = require('../index');

var custom = function(template) {

    let self = this;

    self.simple = function() {
        let copy = clone(template);

        return evaluate(copy);
    };

    self.array = function(length) {

        let array = [];

        for(let i = 0; i < length; i++) {
            let copy = clone(template);

            array.push(evaluate(copy));
        }

        return array;
    };

    return self;
};

function evaluate(obj) {

    for (var key in obj) {

        if (obj[key] !== null && typeof obj[key] === "object") {
            // Recurse into children
            evaluate(obj[key]);
        } else {
            obj[key] = eval(obj[key]);
        }
    }

    return obj;
}

module.exports = custom;

// EXAMPLE
// let cust = custom({
//                 hey: "spawn.color.hue(spawn.color.HUES.red).array(4)",
//                 hi: {
//                     ho: "spawn.color.simple()",
//                     very: "spawn.text.string.random()",
//                     color: "spawn.color.hue(spawn.color.HUES.blue).simple()"
//                 }
//             });
//


