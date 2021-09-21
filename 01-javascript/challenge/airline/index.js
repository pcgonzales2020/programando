const { Flight } = require('./src/flight');

const flight = new Flight('0001', new Date('2021-09-14T12:00:00'), new Date('2021-09-17T16:30:00'));
//flight.markAsArrived();
console.log(flight.getFlightDetail());
