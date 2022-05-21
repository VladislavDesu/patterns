// Decorator (Декоратор)

class Car {
    constructor() {
        this.price = 10000;
        this.model = "Car";
    }

    getPrice() {
        return this.price;
    }

    getModel() {
        return this.model;
    }
}

class Tesla extends Car {
    constructor() {
        super();
        this.price = 25000;
        this.model = "Tesla";
    }
}

class Audi extends Car {
    constructor() {
        super();
        this.price = 30000;
        this.model = "Audi";
    }
}

class AutoPilot {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.price + 5000;
    }

    getModel() {
        return `${this.car.model} with autopilot`;
    }
}

class Parking {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 2000;
    }

    getModel() {
        return `${this.car.getModel()} with parking`;
    }
}

let tesla = new Tesla();
let audi = new Audi();

audi = new AutoPilot(audi);
tesla = new Parking(tesla);

console.log(audi.getModel());
console.log(tesla.getModel());