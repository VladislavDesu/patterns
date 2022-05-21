// Prototype (Прототип)

class TeslaCar {
    constructor(model, color, price, autopilot) {
        this.model = model;
        this.color = color;
        this.price = price;
        this.autopilot = autopilot;
    }

    produce() {
        return new TeslaCar(this.model, this.color, this.price, this.autopilot)
    }
}

const prototypeCar = new TeslaCar("S", "black", 40000, false);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car2.color = "white";
car2.price = 42000;

console.log(car1);
console.log(car2);
console.log(car3);
