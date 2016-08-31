/**
 * Created by JT on 8/26/16.
 */

var locationConfig = require('./config/location');
var locations = locationConfig.location;
var planets = locationConfig.planets;
var continents = locationConfig.continents;
var countries = locationConfig.countries;

var number = require('./number');

module.exports = {

    city: (stateCode = null) => {
        var locs;
        if (stateCode && typeof stateCode === 'string') {
          stateCode = stateCode.toUpperCase();
          locs = locations.filter(function(loc) {
            return loc.stateAbbr === stateCode;
          });
        } else locs = locations;
        return locs[number.int.between(0, locs.length-1)].name;
    },

    state: () => {
        var i = number.int.between(0, locations.length-1);
        return {
            state: locations[i].state,
            code: locations[i].stateAbbr
        };
    },

    planet: () => {
        return planets[number.int.between(0, planets.length-1)];
    },

    country: () => {
        return countries[number.int.between(0, countries.length-1)];
    },

    continent: () => {
        return continents[number.int.between(0, continents.length-1)];
    }

    // country
    // continent
    // latitude
    // longitude
    // coordinates
    // zip

};
