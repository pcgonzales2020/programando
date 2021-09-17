class MessageStatus {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
}

class Flight {
    constructor(number, departure, arrival) {
        this.number = number;
        this.departure = departure;
        this.arrival = arrival;
        this.arrivalConfirm = false;
    }

    arrivalConfirm() {
        this.arrivalConfirm = true;
    }
    status() {
        let result = "";
        result += "FLIGHT #" + this.number + "\n";
        result += "Departure date: " + this.departure.toLocaleString("en-GB") + "\n";
        result += "Arrival date: " + this.arrival.toLocaleString("en-GB") + "\n";

        if (this.arrivalConfirm) {
            result += "Status: arrived";
        } else {
            let calculateTime = this._calculateTime();
            result += "Status: " + calculateTime[0].status + "\n";
            result += calculateTime[0].message
        }

        return result;
    }

    _calculateTime() {
        let result = [],
            today = new Date(),
            differenceTimeMiliSeconds = 0;

        if (today.getTime() > this.arrival.getTime()) {
            differenceTimeMiliSeconds = today.getTime() - this.arrival.getTime()
        } else {
            differenceTimeMiliSeconds = this.arrival.getTime() - today.getTime();
        }

        let timeString = this._msToTime(differenceTimeMiliSeconds);

        if (differenceTimeMiliSeconds < 0) {
            result.push(new MessageStatus('delayed', 'Delayed time: ' + timeString));
        } else {
            result.push(new MessageStatus('on fligth', 'Arrival time: ' + timeString));
        }
        return result;
    }

    _msToTime(duration) {
        var seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }

}

let fligth = new Flight('0001', new Date('2021-09-14T12:00:00Z'), new Date('2021-09-15T15:30:00Z'));
//fligth.arrivalConfirm=true;
let statusFligth = fligth.status();
console.log(statusFligth);

