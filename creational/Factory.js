// Factory (Фабричный Метод)

class BMW {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

class FactoryBMW {
    create(type) {
        if (type === "X6") {
            return new BMW(type, 111000, 300);
        }

        if (type === "X5") {
            return new BMW(type, 250000, 350);
        }
    }
}

const factory = new FactoryBMW();

const x6 = factory.create("X6");
const x5 = factory.create("X5");

console.log(x6, x5);

