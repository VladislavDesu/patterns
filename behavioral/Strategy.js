// Strategy (Стратегия)

class AutoCart {
    constructor(discount) {
        this.discount = discount;
        this.amount = 0
    }

    checkout() {
        return this.discount(this.amount);
    }

    setAmount(amount) {
        this.amount = amount;
    }
}

function baseStrategy(amount) {
    return amount
}

function premiumStrategy(amount) {
    return amount * 0.85
}

function platinumStrategy(amount) {
    return amount * 0.65
}

const baseCustomer = new AutoCart(baseStrategy);
const premiumCustomer = new AutoCart(premiumStrategy);
const platinumCustomer = new AutoCart(platinumStrategy);

baseCustomer.setAmount(50000);
premiumCustomer.setAmount(50000);
platinumCustomer.setAmount(50000);

console.log(baseCustomer.checkout())
console.log(premiumCustomer.checkout())
console.log(platinumCustomer.checkout())