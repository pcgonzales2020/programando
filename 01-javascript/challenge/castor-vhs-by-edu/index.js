const { Customer, CustomerType } = require('./src/customer');
const { Movies, Movie } = require('./src/movie');
const { MovieRental } = require('./src/movie-rental');

const movieRental = new MovieRental();

movieRental.add(
    new Customer('Eduardo', CustomerType.VIP),
    new Movie(Movies.avengers),
    new Date()
);

movieRental.add(
    new Customer('Delayed Customer', CustomerType.VIP),
    new Movie(Movies.benhur),
    new Date('2021/09/17 17:00')
);

movieRental.print();