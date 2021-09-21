
const { RentedMovie, RentedMovieDashboard } = require('./src/rented');
const { Customer, customerType } = require('./src/customer');

const customer1 = new Customer('Christian', customerType.VIP);
const customer2 = new Customer('Eduardo', customerType.PLATINIUM);
const customer3 = new Customer('Pepe le pu', customerType.STANDARD);

const rentedMovieDashboard = new RentedMovieDashboard();

const rentedMovieadd = new RentedMovie(customer1, 'La Novicia rebelde', new Date('2021-09-20 14:00:00'));
rentedMovieadd.devolution(new Date('2021-09-23 05:00:00'));
rentedMovieDashboard.add(rentedMovieadd);

rentedMovieDashboard.add(new RentedMovie(customer2, 'Espartaco', new Date('2021-09-17 14:00:00')));

const rentedMovie1 = new RentedMovie(customer3, 'El secreto de la montaña', new Date('2021-09-20 14:00:00'));
rentedMovie1.devolution(new Date('2021-09-20 15:00:00'));
rentedMovieDashboard.add(rentedMovie1);

rentedMovieDashboard.print();