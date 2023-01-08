interface queryObjectConfig {
    price: string[] | [];
    gamers: string[] | [];
    brand: string[] | [];
    category: string[] | [];
}
export declare class QueryStorage {
    queryObject: queryObjectConfig;
    private static instance;
    private constructor();
    static getInstance(): QueryStorage;
    getList(): queryObjectConfig;
    changeParams(name: string, valueList: string[]): void;
}
export {};
//# sourceMappingURL=query-singleton.d.ts.map