/**
 * Created by DS on 8/29/16.
 */

let randomColor = require('randomcolor');

var color = {

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

        let self = this;

        self.simple = function() {
            if(!color.HUES.hasOwnProperty(hue)) throw new Error("Invalid hue");

            return randomColor({hue: hue});
        };

        self.array = function(length) {
            if(!color.HUES.hasOwnProperty(hue)) throw new Error("Invalid hue");
            if(length < 1) throw new Error("Invalid length");

            return randomColor({hue: hue, count: length});
        };

        return self;
    },

    luminosity: function(luminosity) {

        let self = this;

        self.simple = function() {
            if(!color.LUMINOSITIES.hasOwnProperty(luminosity)) throw new Error("Invalid luminosity");

            return randomColor({luminosity: luminosity});
        };

        self.array = function(length) {
            if(!color.LUMINOSITIES.hasOwnProperty(luminosity)) throw new Error("Invalid luminosity");
            if(length < 1) throw new Error("Invalid length");

            return randomColor({luminosity: luminosity, count: length});
        };

        return self;
    },

    hueAndLuminosity: function(hue, luminosity) {

        let self = this;

        self.simple = function() {
            if(!color.HUES.hasOwnProperty(hue)) throw new Error("Invalid hue");
            if(!color.LUMINOSITIES.hasOwnProperty(luminosity)) throw new Error("Invalid luminosity");

            return randomColor({hue: hue, luminosity: luminosity});
        };

        self.array = function(length) {
            if(!color.HUES.hasOwnProperty(hue)) throw new Error("Invalid hue");
            if(!color.LUMINOSITIES.hasOwnProperty(luminosity)) throw new Error("Invalid luminosity");
            if(length < 1) throw new Error("Invalid length");

            return randomColor({hue: hue, luminosity: luminosity, count: length});
        };

        return self;
    }

};

module.exports = color;