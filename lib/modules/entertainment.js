var number = require('./number');

var entertainmentConfig = require('./config/entertainment');
var movies = entertainmentConfig.movies;

module.exports = {

    movie: function(args) {
        var m = movies;

        if (args && args.studio){
            m = m.filter(function(movie) {
                return movie.studio.toUpperCase() === args.studio.toUpperCase()
            });
        }

        if (args && args.year) {
            m = m.filter(function(movie) {
                return movie.year === args.year;
            });
        }

        return m[number.int.between(0, m.length-1)];
    }

};