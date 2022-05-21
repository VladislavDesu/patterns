// Flyweight (Легковес)

class Auto {
    constructor(model) {
        this.model = model;
    }
}

class AutoFactory {
    constructor() {
        this.models = {}
    }

    create(name) {
        let model = this.models[name];
        if (model) return model;
        this.models[name] = new Auto(name);
        return this.models[name]
    }

    getModels() {
        return this.models;
    }
}

const factory = new AutoFactory();

const tesla = factory.create("Tesla");
const bmw = factory.create("BMW");
const audi = factory.create("Audi");
const blackTesla = factory.create("Tesla");

console.log(factory.getModels());