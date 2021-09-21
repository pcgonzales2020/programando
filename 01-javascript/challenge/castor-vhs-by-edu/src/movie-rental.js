const { CustomerType } = require('./customer');

class RentedMovie {
    constructor(customer, movie, price, creationDate, endDate) {
        this.customer = customer;
        this.movie = movie;
        this.price = price;
        this.creationDate = creationDate;
        this.endDate = endDate;
    }

    get isDelayed() {
        return this.endDate < new Date();
    }

    get delayedTime() {
        if (!this.isDelayed) {
            return null;
        }

        return Math.ceil((new Date() - this.endDate) / 3600000);
    }

    get penalty() {
        if (!this.isDelayed) {
            return null;
        }

        const delayedTime = Math.ceil(this.delayedTime / 12);
        return (this.price * 0.05) * delayedTime;
    }
}

class MovieRental {
    constructor() {
        this.rentedMovies = [];
    }

    add(customer, movie, rentedDate) {
        const endDate = new Date(rentedDate.getTime());

        // add 2 days
        endDate.setDate(endDate.getDate() + 2);

        // calculate price
        let price = 5;

        if (customer.type === CustomerType.VIP) {
            price *= (1 - 0.15);
        }

        const rentedMovie = new RentedMovie(customer, movie, price, rentedDate, endDate);

        // push rented movies to array
        this.rentedMovies.push(rentedMovie);
    }

    _priceParser(value) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    print() {
        for (const rentedMovie of this.rentedMovies) {
            console.info(`%c${rentedMovie.movie.name.toUpperCase()}`, 'color: cyan');
            console.info(`%cCustomer: ${rentedMovie.customer.name}`, 'color: white');
            console.info(`%cPrice: ${this._priceParser(rentedMovie.price)}`, 'color: white');
            console.info(`%cRented date: ${rentedMovie.creationDate.toLocaleString()}`, 'color: white');
            console.info(`%cReturn date: ${rentedMovie.endDate.toLocaleString()}`, 'color: white');

            if (rentedMovie.isDelayed) {
                console.info(`%cDelayed time: ${rentedMovie.delayedTime}h`, 'color: orange');
                console.info(`%cPenalty: ${this._priceParser(rentedMovie.penalty)}`, 'color: orange');
            }

            console.log('%c--------------', 'color: grey');
        }
    }
}

module.exports = {
    MovieRental
};