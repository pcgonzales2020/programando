const Movies = {
    titanic: 'Titanic',
    avengers: 'Avengers',
    patriot: 'El patriota',
    benhur: 'Benhur'
};

class Movie {
    constructor(name) {
        this.name = name;
    }
}

module.exports = {
    Movie,
    Movies
};