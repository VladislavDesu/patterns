// Builder (Строитель)

class Car {
    constructor() {
        this.autoPilot = false;
        this.parking = false;
        this.signaling = false;
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    addAutoPilot(autoPilot) {
        this.car.autoPilot = autoPilot;
        return this;
    }

    addParking(parking) {
        this.car.parking = parking;
        return this;
    }

    addSignaling(signaling) {
        this.car.signaling = signaling;
        return this;
    }

    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    build() {
        return this.car;
    }
}

const car1 = new CarBuilder()
    .addAutoPilot(true)
    .addSignaling(true)
    .build();

const car2 = new CarBuilder()
    .addSignaling(true)
    .updateEngine("V8")
    .build();

console.log(car1);
console.log(car2);