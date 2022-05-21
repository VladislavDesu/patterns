// State (Состояние)

class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }

    next() {
        return new this.nextStatus()
    }
}

class Order {
    constructor() {
        this.state = new WaitingForPayments()
    }

    nextState() {
        this.state = this.state.next()
    }

    cancel() {
        this.state.name === "Waiting For Payments"
            ? console.log("Order is canceled!")
            : console.log("Order cannot be canceled!")
    }
}

class WaitingForPayments extends OrderStatus {
    constructor() {
        super("Waiting For Payments", Shipping)
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super("Shipping", Delivered)
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super("Delivered", Delivered)
    }
}

const myOrder = new Order();

console.log(myOrder.state.name);
myOrder.cancel();
myOrder.nextState();
console.log(myOrder.state.name);
myOrder.nextState();
myOrder.cancel();
console.log(myOrder.state.name);
