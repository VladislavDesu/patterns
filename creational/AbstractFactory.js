// Abstract Factory (Абстрактная Фабрика)

class Z4 {
    info() {
        return "Z4 is a Sport car!"
    }
}

class I3 {
    info() {
        return "I3 is a Family car!"
    }
}

const bmwProducer = (kind) => {
    return kind === "sport" ? sportCarFactory : familyCarFactory
};

const sportCarFactory = () => {
    return new Z4();
};

const familyCarFactory = () => {
    return new I3();
};

const producerSport = bmwProducer("sport");
const producerFamily = bmwProducer("family");

const myCar = producerSport();
const friendCar = producerFamily();

const myInfo = myCar.info();
const friendInfo = friendCar.info();

console.log(myInfo);
console.log(friendInfo);