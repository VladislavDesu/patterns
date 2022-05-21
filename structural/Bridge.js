// Bridge (Мост)

class Model {
    constructor(color) {
        this.color = color
    }
}

class Color {
    constructor(type) {
        this.type = type
    }

    get() {
        return this.type
    }
}

class BlackColor extends Color {
    constructor() {
        super("Dark Black");
    }
}

class SilverColor extends Color {
    constructor() {
        super("Silver");
    }
}

class Audi extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: Audi, Color: ${this.color.get()}`
    }
}

class BMW extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: BMW, Color: ${this.color.get()}`
    }
}

const silverAudi = new Audi(new SilverColor());
const blackBMW = new BMW(new BlackColor());

console.log(silverAudi.paint());
console.log(blackBMW.paint());

