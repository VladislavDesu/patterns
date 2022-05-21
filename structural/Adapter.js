// Adapter (Адаптер)

class Auto {
    startEngine(engine) {
        engine.simpleInterface();
    }
}

class Engine2 {
    simpleInterface() {
        console.log("Engine 2.0 - tr-tr-tr");
    }
}

class EngineV8 {
    complicatedInterface() {
        console.log("Engine V8 - wroom wroom!");
    }
}

class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }

    simpleInterface() {
        this.engine.complicatedInterface();
    }
}

const myCar = new Auto();

const oldEngine = new Engine2();
myCar.startEngine(oldEngine);

const engineAdapter = new EngineV8Adapter(new EngineV8());
myCar.startEngine(engineAdapter);
