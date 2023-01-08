// let instance: QueryStorage;

interface queryObjectConfig {
    price: string[] | [];
    gamers: string[] | [];
    brand: string[] | [];
    category: string[] | [];
}

export class QueryStorage {
    queryObject: queryObjectConfig;
    private static instance: QueryStorage;

    private constructor() {
        this.queryObject = {
            price: [],
            gamers: [],
            brand: [],
            category: [],
        };

        // if (!instance) instance = this;
        // return instance;
    }

    public static getInstance(): QueryStorage {
        if (!QueryStorage.instance) {
            QueryStorage.instance = new QueryStorage();
        }
        return QueryStorage.instance;
    }

    getList() {
        return this.queryObject;
    }

    changeParams(name: string, valueList: string[]) {
        if (name === 'price') {
            this.queryObject.price = valueList;
        } else if (name === 'gamers') {
            this.queryObject.gamers = valueList;
        } else if (name === 'brand') {
            this.queryObject.brand = valueList;
        } else if (name === 'category') {
            this.queryObject.category = valueList;
        }
    }
}
