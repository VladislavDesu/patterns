// Memento (Снимок)

class Memento {
    constructor(value) {
        this.value = value;
    }
}

class Caretaker {
    constructor() {
        this.values = []
    }

    addMemento(memento) {
        this.values.push(memento)
    }

    getMemento(index) {
        return this.values[index];
    }
}

const creator = {
    save: val => new Memento(val),
    restore: memento => memento.value
};

const careTaker = new Caretaker();

careTaker.addMemento(creator.save('Hello'));
careTaker.addMemento(creator.save('Hello World'));
careTaker.addMemento(creator.save('Hello World!!!'));

console.log(careTaker.getMemento(1));