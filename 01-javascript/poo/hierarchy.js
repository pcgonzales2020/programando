class Vehicle {
    constructor(model, brand) {
        this.model = model;
        this.brand = brand;
    }

    run() {
        console.log(`${this.name} is running`);
    }

    stop() {
        console.log(`${this.name} is stopped`);
    }

    turnOnLight() {
        console.log(`${this.name} turned on its lights`);
    }

    turnOffLight() {
        console.log(`${this.name} turned off its lights`);
    }

    get name() {
        return `${this.brand} - ${this.model}`;
    }
}

class Motorcycle extends Vehicle {
    constructor(model, brand) {
        super(model, brand);
    }
}

class TimeMachineCar extends Vehicle {
    constructor(model, brand) {
        super(model, brand);
    }

    travelTroughTime() {
        console.log(`${this.name} traveling to the future`);
    }
}

const motorcycle1 = new Motorcycle("ASX2021", "Hiunday");
motorcycle1.run();

const car = new TimeMachineCar("TIMEX1", "Delorian");
car.travelTroughTime();