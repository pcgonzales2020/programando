const rentedStatus = {
    DELAYED: 'delayed',
    ONTIME: 'ontime'
};

class Customer {
    constructor(name, VIP) {
        this.name = name;
        this.VIP = VIP;
    }
}

function dateDiffToH(startDate, endDate) {
    const secondsDiff = Math.abs(Math.floor(endDate.getTime() - startDate.getTime()) / 1000);
    return Math.floor(secondsDiff / 3600);
}

class RentedMovie {
    constructor(customer, movie, rentedDate) {
        this.customer = customer;
        this.movie = movie;
        this.rentedDate = rentedDate;

        const returnDate = new Date(this.rentedDate.getTime());
        returnDate.setDate(returnDate.getDate() + 2);
        this.returnDate = returnDate;

        this.price = 5;

        if (customer.VIP) {
            this.price *= 1 - 0.15;
        }

        this.devolutionDate = null;
    }

    devolution(date) {
        this.devolutionDate = date;
    }

    get status() {
        if ((this.devolutionDate && this.devolutionDate.getDate() > new Date()) || (new Date() > this.returnDate)) {
            return rentedStatus.DELAYED;
        };
        return rentedStatus.ONTIME;
    };

    get hourExcess() {
        const hourExcess = dateDiffToH(this.devolutionDate, new Date());
        return (hourExcess / 12);
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
            console.info(`%cRented Date: ${rentedMovie.rentedDate.toLocaleDateString()}`, 'color: white');
            console.info(`%cReturn Date: ${rentedMovie.returnDate.toLocaleDateString()}`, 'color: white');

            if (rentedMovie.status === rentedStatus.DELAYED) {
                console.info(`%cDelayed Time: ${rentedMovie.hourExcess}h`, 'color: orange');
                console.info(`%cPenalty: $${rentedMovie.hourExcess}*0.05`, 'color: orange');
            }
            console.log('%c--------------', 'color: grey');
        }
    }
}
const customer1 = new Customer('Christian', true);
const customer2 = new Customer('Eduardo', true);

const rentedMovieDashboard = new RentedMovieDashboard();
const rentedMovie = new RentedMovie(customer1, 'La Novicia rebelde', new Date('2021-09-20 14:00:00'));
rentedMovie.devolution(new Date('2021-09-23 15:00:00'));
rentedMovieDashboard.add(rentedMovie);

rentedMovieDashboard.add(new RentedMovie(customer2, 'Espartaco', new Date('2021-09-17 14:00:00')));
rentedMovieDashboard.print();