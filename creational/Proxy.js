// Proxy (Заместитель)

class CarAccess {
    open() {
        console.log("Opening the car door");
    }

    close() {
        console.log("Closing the car door");
    }
}

class SecuritySystem {
    static password = "Ilon";

    constructor(door) {
        this.door = door;
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log("Access denied!");
        }
    }

    authenticate(password) {
        return password === SecuritySystem.password;
    }

    close() {
        this.door.close();
    }
}

const car = new SecuritySystem(new CarAccess());

car.open("Pleasee open my car!!")
car.open("Ilon")
car.close()
