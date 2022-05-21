// Iterator (Итератор)

class Iterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length
    }
}

class IteratorObject {
    constructor(el) {
        this.index = 0;
        this.keys = Object.keys(el);
        this.elements = el;
    }

    next() {
        return this.elements[this.keys[this.index++]]
    }

    hasNext() {
        return this.index < this.keys.length
    }
}

const autos = ["Audi", "Tesla", "BMW", "Mercedes"];
const autosObject = {
    audi: {model : "Audi"},
    tesla: {model : "Tesla"},
    bmw: {model : "BMW"},
    mercedes: {model : "Mercedes"},
};

const collections = new Iterator(autos);
const collectionsObject = new IteratorObject(autosObject);

while (collections.hasNext()) {
    console.log(collections.next());
}

console.log("--------------");

while (collectionsObject.hasNext()) {
    console.log(collectionsObject.next());
}