// Observer (Наблюдатель)

class AutoNews {
    constructor() {
        this.news = "";
        this.actions = []
    }

    setNews(text) {
        this.news = text;
        this.notifyAll();
    }

    notifyAll() {
        return this.actions.forEach(subs => subs.inform(this))
    }

    register(observer) {
        this.actions.push(observer);
    }

    unregister(observer) {
        this.actions = this.actions.filter(el => !el instanceof observer)
    }
}

class User {
    inform(message) {
        console.log(`User has been informed about: ${message.news}`)
    }
}

const autoNews = new AutoNews();
autoNews.register(new User);
autoNews.setNews("New Tesla price is 40000")