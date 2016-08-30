/**
 * Created by DS on 8/29/16.
 */

var randomColor = require('randomcolor');

module.exports = {

    HUES: {
        red: "red",
        orange: "orange",
        yellow: "yellow",
        green: "green",
        blue: "blue",
        purple: "purple",
        pink: "pink",
        monochrome: "monochrome",
        random: "random"
    },

    LUMINOSITIES: {
        light: "light",
        dark: "dark",
        random: "random"
    },

    simple: function () {
        return randomColor();
    },

    array: function (length) {
        if(length > 0) return randomColor({count: length});
        else throw new Error("Invalid length");
    },

    hue: function(hue) {

        this.simple = function() {
            return randomColor({hue: hue});
        };

        this.array = function(length) {
            return randomColor({hue: hue, count: length});
        };

    },

    luminosity: function(luminosity) {

        this.simple = function() {
            return randomColor({luminosity: luminosity});
        };

        this.array = function(length) {
            return randomColor({luminosity: luminosity, count: length});
        };
    }

};