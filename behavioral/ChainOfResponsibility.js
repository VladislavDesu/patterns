// Chain of Responsibility (Цепочка обязанностей)

class Account {
    pay(orderPrice) {
        if (this.canPay(orderPrice)) {
            console.log(`Paid ${orderPrice} using ${this.name}`)
        } else if (this.incomer) {
            console.log(`Cannot pay using ${this.name}`)
            this.incomer.pay(orderPrice);
        } else {
            console.log(`Unfortunately, not enough money`)

        }
    }

    canPay(amount) {
        return this.balance >= amount
    }

    setNext(account) {
        this.incomer = account;
    }


    show() {
        console.log(this)
    }
}

class Master extends Account {
    constructor(balance) {
        super()
        this.balance = balance;
        this.name = "MasterCard"
    }
}

class Paypal extends Account {
    constructor(balance) {
        super()
        this.balance = balance;
        this.name = "Paypal"
    }
}

class Ethereum extends Account {
    constructor(balance) {
        super()
        this.balance = balance;
        this.name = "Ethereum"
    }
}

const mastercard = new Master(100);
const paypal = new Paypal(250);
const ethereum = new Ethereum(400);

mastercard.setNext(paypal);
paypal.setNext(ethereum);

mastercard.pay(250);
mastercard.show();

