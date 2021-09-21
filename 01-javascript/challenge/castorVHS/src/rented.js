const { customerType } = require('./customer');

function dateDiffToH(startDate, endDate) {
    const duration = endDate.getTime() - startDate.getTime();
    const hours = Math.floor(duration / 3600000);

    return hours;
}

class RentedMovie {
    constructor(customer, movie, rentedDate) {
        this.customer = customer;
        this.movie = movie;
        this.rentedDate = rentedDate;
        this.returnDate = null;

        this.price = 5;

        if (customer.type === customerType.VIP) {
            this.price *= 1 - 0.15;
        }

        this.rentedDateLimit = new Date(this.rentedDate.getTime());
        this.rentedDateLimit.setDate(this.rentedDateLimit.getDate() + 2);
    }

    devolution(returnDate) {
        this.returnDate = returnDate;
    }

    get penalty() {
        const result = {
            hoursExcess: 0,
            amount: 0
        };

        let dateEnd = null;

        if (this.returnDate && this.returnDate > this.rentedDateLimit) {
            dateEnd = this.returnDate;
        } else if (new Date() > this.rentedDateLimit) {
            dateEnd = new Date();
        }

        if (dateEnd) {
            result.hoursExcess = dateDiffToH(this.rentedDateLimit, dateEnd);
            const hoursPenalty = Math.ceil((result.hoursExcess / 12));
            result.amount = Math.round(((this.price * 0.05) * hoursPenalty) * 100) / 100;
        }

        return result;
    };
}

class RentedMovieDashboard {
    constructor() {
        this.rentedMovies = [];
    }

    add(rentedMovie) {
        this.rentedMovies.push(rentedMovie);
    }

    print() {
        for (const rentedMovie of this.rentedMovies) {
            console.info(`%cMovie: ${rentedMovie.movie}`, 'color: cyan');
            console.info(`%cCustomer: ${rentedMovie.customer.name}`, 'color: white');
            console.info(`%cType: ${rentedMovie.customer.type}`, 'color: white');
            console.info(`%cPrice: ${rentedMovie.price}`, 'color: white');
            console.info(`%cRented Date: ${rentedMovie.rentedDate.toLocaleString()}`, 'color: white');

            if (rentedMovie.returnDate) {
                console.info(`%cReturn Date: ${rentedMovie.returnDate.toLocaleString()}`, 'color: white');
            }

            if (rentedMovie.penalty.amount) {
                console.info(`%cDelayed Time: ${rentedMovie.penalty.hoursExcess}h`, 'color: orange');
                console.info(`%cPenalty: $${rentedMovie.penalty.amount}`, 'color: orange');
            }

            console.log('%c--------------', 'color: grey');
        }
    }
}

module.exports = {
    RentedMovie,
    RentedMovieDashboard
};