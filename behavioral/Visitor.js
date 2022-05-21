// Visitor (Посетитель)

class Auto {
    accept(visitor) {
        visitor(this)
    }
}

class Tesla extends Auto {
    info() {
        return "It is a Tesla Car!"
    }
}

class Audi extends Auto {
    info() {
        return "It is a Audi Car!"
    }
}

class BMW extends Auto {
    info() {
        return "It is a BMW Car!"
    }
}

function exportVisitor(auto) {
    if (auto instanceof Tesla) {
        auto.export = `Exported data: ${auto.info()}`
    }
    if (auto instanceof Audi) {
        auto.export = `Exported data: ${auto.info()}`
    }
    if (auto instanceof BMW) {
        auto.export = `Exported data: ${auto.info()}`
    }
}

const tesla = new Tesla();
const audi = new Audi();
const bmw = new BMW();

tesla.accept(exportVisitor);
bmw.accept(exportVisitor);
audi.accept(exportVisitor);

console.log(tesla.export);
console.log(bmw.export);
console.log(audi.export);