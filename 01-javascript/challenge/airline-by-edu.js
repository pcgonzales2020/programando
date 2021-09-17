const flightStatus = {
    ARRIVED: 'arrived',
    DELAYED: 'delayed',
    ONTIME: 'on time'
};

function dateDiffToHms(startDate, endDate) {
    const secondsDiff = Math.abs(Math.floor(endDate.getTime() - startDate.getTime()) / 1000);

    const hours = Math.floor(secondsDiff / 3600);
    const minutes = Math.floor(secondsDiff % 3600 / 60);
    const seconds = Math.floor(secondsDiff % 3600 % 60);

    return `${hours > 9 ? hours : ('0' + hours)}:${minutes > 9 ? minutes : ('0' + minutes)}:${seconds > 9 ? seconds : ('0' + seconds)}`;
}

class Flight {
    constructor(number, departureDate, arrivalDate) {
        this.number = number;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.landingDate = null;
    }

    updateArriveStatus(landingDate) {
        this.landingDate = landingDate;
    }

    get status() {
        if (this.landingDate) {
            return flightStatus.ARRIVED;
        }

        if (this.arrivalDate > new Date()) {
            return flightStatus.ONTIME;
        }

        return flightStatus.DELAYED;
    }

    get timeDiff() {
        return dateDiffToHms(this.arrivalDate, new Date());
    }
}

class FlightDashboard {
    constructor() {
        this.flights = [];
    }

    add(flight) {
        this.flights.push(flight);
    }

    print() {
        for (const flight of this.flights) {
            console.info(`%cFLIGHT #${flight.number}`, 'color: cyan');
            console.info(`%cDeparture date: ${flight.departureDate.toLocaleDateString()} ${flight.departureDate.toLocaleTimeString()}`, 'color: white');
            console.info(`%cArrival date: ${flight.arrivalDate.toLocaleDateString()} ${flight.arrivalDate.toLocaleTimeString()}`, 'color: white');
            console.info(`%cStatus: ${flight.status}`, 'color: white');

            if (flight.status === flightStatus.DELAYED) {
                console.info(`%cDelayed time: ${flight.timeDiff}`, 'color: orange');
            }

            if (flight.status === flightStatus.ONTIME) {
                console.info(`%cArrival time: ${flight.timeDiff}`, 'color: yellow');
            }

            if (flight.status === flightStatus.ARRIVED) {
                console.info(`%cLanding date: ${flight.landingDate.toLocaleDateString()} ${flight.landingDate.toLocaleTimeString()}`, 'color: #90ee90');
            }

            console.log('%c--------------', 'color: grey');
        }
    }
}

const dashboard = new FlightDashboard();
dashboard.add(new Flight('0001', new Date('2021-09-16 20:00:00'), new Date('2021-09-17 16:00:00')));
dashboard.add(new Flight('0002', new Date('2021-08-16 19:00:00'), new Date('2021-09-17 17:00:00')));

const arrivedFlight = new Flight('0003', new Date('2021-09-16 20:00:00'), new Date('2021-09-17 16:00:00'));
arrivedFlight.updateArriveStatus(new Date('2021-09-17 16:02:00'));

dashboard.add(arrivedFlight);

dashboard.print();
