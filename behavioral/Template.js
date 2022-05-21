// Template (Шаблон)

class Builder {
    build() {
        this.addEngine()
        this.installChassis()
        this.addElectronics()
        this.collectAccessories()
    }
}

class AudiBuilder extends Builder {
    addEngine() {
        console.log("Add Audi Engine")
    }

    installChassis() {
        console.log("Install Audi Chassis")
    }

    addElectronics() {
        console.log("Add special Audi Electronics")
    }

    collectAccessories() {
        console.log("Collect Accessories")
    }
}

class TeslaBuilder extends Builder {
    addEngine() {
        console.log("Add Electronic Engine")
    }

    installChassis() {
        console.log("Install Tesla Chassis")
    }

    addElectronics() {
        console.log("Add Tesla Electronics")
    }

    collectAccessories() {
        console.log("Collect Accessories")
    }
}

const teslaBuilder = new TeslaBuilder();
const audiBuilder = new AudiBuilder();

audiBuilder.build()
console.log("---------------");
teslaBuilder.build()