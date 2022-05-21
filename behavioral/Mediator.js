// Mediator (Посредник)

class OfficialDealer {
    constructor() {
        this.customers = []
    }

    orderAuto(customer, auto, info) {
        const name = customer.getName();
        console.log(`Order name: ${name}. Order auto is ${auto}`);
        console.log(`Additional info: ${info}`);
        this.addCustomer(name)
    }

    addCustomer(name) {
        this.customers.push(name);
    }

    getCustomers() {
        return this.customers;
    }
}

class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info);
    }
}

const mediator = new OfficialDealer();

const user = new Customer("User", mediator);

user.makeOrder("Audi", "With parking and autopilot!");

console.log(mediator.getCustomers());