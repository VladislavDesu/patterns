// Composite (Компоновщик)

class Equipment {
    getPrice() {
        return this.price || 0;
    }

    setPrice(price) {
        this.price = price
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name
    }
}

class Engine extends Equipment {
    constructor() {
        super();
        this.setName("Engine");
        this.setPrice(4000);
    }
}

class Body extends Equipment {
    constructor() {
        super();
        this.setName("Body");
        this.setPrice(2000);
    }
}

class Tools extends Equipment {
    constructor() {
        super();
        this.setName("Tools");
        this.setPrice(800);
    }
}

class Composite extends Equipment {
    constructor() {
        super();
        this.equipment = []
    }

    add(equipment) {
        this.equipment.push(equipment);
    }

    getPrice() {
        return this.equipment
            .map(equipment => equipment.getPrice())
            .reduce((a, b) => a + b)
    }
}

class Car extends Composite {
    constructor(name) {
        super();
        this.setName(name)
    }
}

const myCar = new Car("Audi");
myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(`${myCar.getName()} price is ${myCar.getPrice()}$`)
