const flightStatus = {
    ARRIVED: 'arrived',
    DELAYED: 'delayed',
    ONFLIGHT: 'on flight'
};

function dateDiffToHms(startDate, endDate) {
    const secondsDiff = Math.floor(endDate.getTime() - startDate.getTime()) / 1000;

    const hours = Math.floor(secondsDiff / 3600);
    const minutes = Math.floor(secondsDiff % 3600 / 60);
    const seconds = Math.floor(secondsDiff % 3600 % 60);

    return `${hours > 9 ? hours : ('0' + hours)}:${minutes > 9 ? minutes : ('0' + minutes)}:${seconds > 9 ? seconds : ('0' + seconds)}`;
}

class Flight {
    constructor(number, departureDate, arrivalDate, landingDate = null) {
        this.number = number;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.landingDate = landingDate;
    }

    get status() {
        if (this.landingDate) {
            return flightStatus.ARRIVED;
        }

        if (this.arrivalDate > new Date()) {
            return flightStatus.ONFLIGHT;
        }

        return flightStatus.DELAYED;
    }

    get delayedTime() {
        if (this.status === flightStatus.DELAYED) {
            return dateDiffToHms(this.arrivalDate, new Date());
        }

        return '';
    }

    get arrivalTime() {
        if (this.status === flightStatus.ONFLIGHT) {
            return dateDiffToHms(new Date(), this.arrivalDate);
        }

        return '';
    }
}

class FlightDashboard {
    constructor() {
        this.flights = [];
    }

    add({ number, departureDate, arrivalDate, landingDate }) {
        this.flights.push(new Flight(number, departureDate, arrivalDate, landingDate));
    }

    print() {
        for (const flight of this.flights) {
            console.info(`%cFLIGHT #${flight.number}`, 'color: cyan');
            console.info(`%cDeparture date: ${flight.departureDate.toLocaleDateString()} ${flight.departureDate.toLocaleTimeString()}`, 'color: white');
            console.info(`%cArrival date: ${flight.arrivalDate.toLocaleDateString()} ${flight.arrivalDate.toLocaleTimeString()}`, 'color: white');
            console.info(`%cStatus: ${flight.status}`, 'color: white');

            if (flight.status === flightStatus.DELAYED) {
                console.info(`%cDelayed time: ${flight.delayedTime}`, 'color: orange');
            }

            if (flight.status === flightStatus.ONFLIGHT) {
                console.info(`%cArrival time: ${flight.arrivalTime}`, 'color: yellow');
            }

            console.log('%c--------------', 'color: grey');
        }
    }
}

const dashboard = new FlightDashboard();
dashboard.add(new Flight('0001', new Date('2021-09-16 20:00:00'), new Date('2021-09-17 01:00:00'), null));
dashboard.add(new Flight('0002', new Date('2021-09-16 19:00:00'), new Date('2021-09-16 23:00:00'), null));
dashboard.add(new Flight('0003', new Date('2021-09-16 20:00:00'), new Date('2021-09-16 20:00:00'), new Date('2021-09-16 20:02:00')));

dashboard.print();
