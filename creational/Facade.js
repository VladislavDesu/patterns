// Facade (Фасад)

class Conveyor {
    setBody() {
        console.log("Body set!")
    }

    getEngine() {
        console.log("Dismantle Engine!")
    }

    setEngine() {
        console.log("Engine set!")
    }

    setInterior() {
        console.log("Added Interior!")
    }

    getInterior() {
        console.log("Update Interior!")
    }

    setExterior() {
        console.log("Added Exterior!")
    }

    setWheels() {
        console.log("Wheels!")
    }

    addElectronics() {
        console.log("Added Electronics!")
    }

    paint() {
        console.log("Car painted!")
    }
}

class ConveyorFacade {
    constructor(car) {
        this.car = car
    }

    assembleCar() {
        this.car.setBody()
        this.car.getEngine()
        this.car.setEngine()
        this.car.setExterior()
        this.car.getInterior()
        this.car.setInterior()
        this.car.setWheels()
        this.car.addElectronics()
        this.car.paint()
        return this
    }

    changeEngine() {
        this.car.getEngine()
        this.car.setEngine()
        return this
    }

    changeInterior() {
        this.car.getInterior()
        this.car.setInterior()
        return this
    }
}

const conveyor = new ConveyorFacade(new Conveyor());

let car = conveyor.assembleCar()
    .changeEngine()
    .changeInterior()