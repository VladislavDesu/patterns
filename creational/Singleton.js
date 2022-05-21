// Singleton (Одиночка)

class Counter {
    constructor() {
        if (typeof Counter.instance === "object") {
            return Counter.instance
        }

        Counter.instance = this;
        this.count = 0;
        return this;
    }

    getCount() {
        return this.count;
    }

    increaseCount() {
        return this.count++;
    }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount2.increaseCount();

// linked on object instance
const result1 = myCount1.getCount(); // 2
const result2 = myCount2.getCount(); // 2

console.log(result1, result2)