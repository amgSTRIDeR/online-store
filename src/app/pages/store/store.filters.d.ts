import { FilterConfig, GameObject } from './store.interfaces';
export declare class Filter {
    beginList: GameObject[] | null;
    option: string;
    params: string[];
    constructor(config: FilterConfig);
    saveParams(): void;
    changeURL(): void;
    makeIdList(resultList: GameObject[] | null): number[];
    hideCards(resultList: GameObject[] | null): void;
    filter(): GameObject[] | null;
}
//# sourceMappingURL=store.filters.d.ts.map