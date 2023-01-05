let instance: QueryStorage;

interface queryObjectConfig {
    price: string[] | [];
    gamers: string[] | [];
    category: string[] | [];
}

export class QueryStorage {
    queryObject: queryObjectConfig;
    constructor() {
        this.queryObject = {
            price: [],
            gamers: [],
            category: [],
        };
        if (!instance) instance = this;
        return instance;
    }

    getList() {
        return this.queryObject;
    }

    changeParams(name: string, valueList: string[]) {
        if (name === 'price') {
            this.queryObject.price = valueList;
        } else if (name === 'gamers') {
            this.queryObject.gamers = valueList;
        } else if (name === 'category') {
            this.queryObject.category = valueList;
        }
    }
}
