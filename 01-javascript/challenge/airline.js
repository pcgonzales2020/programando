class MessageStatus {
    constructor(status, time) {
        this.status = status;
        this.time = time;
    }
}

class Flight {
    constructor(number, departure, arrival) {
        this.number = number;
        this.departure = departure;
        this.arrival = arrival;
        this.isArrived = false;
    }

    markAsArrived() {
        this.isArrived = true;
    }

    getFlightDetail() {
        let result = '';

        result += 'FLIGHT #' + this.number + '\n';
        result += 'Departure date: ' + this.departure.toLocaleString() + '\n';
        result += 'Arrival date: ' + this.arrival.toLocaleString() + '\n';

        const statusMessage = this._getStatusMessage();
        result += 'Status: ' + statusMessage.status + '\n';

        if (statusMessage.time) {
            result += 'Time: ' + statusMessage.time;
        }

        return result;
    }

    _getStatusMessage() {
        if (this.isArrived) {
            return new MessageStatus('arrived', null);
        }

        const today = new Date();

        const differenceTimeMiliSeconds = (this.arrival - today);
        const timeString = this._msToTime(Math.abs(differenceTimeMiliSeconds));

        if (differenceTimeMiliSeconds < 0) {
            return new MessageStatus('delayed', timeString);
        }

        return new MessageStatus('on time', timeString);
    }

    _msToTime(duration) {
        let seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        return hours + ':' + minutes + ':' + seconds;
    }
}

const flight = new Flight('0001', new Date('2021-09-14T12:00:00'), new Date('2021-09-17T16:30:00'));
flight.markAsArrived();
console.log(flight.getFlightDetail());
