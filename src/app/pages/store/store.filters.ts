import { FilterConfig, GameObject } from './store.interfaces';

export class Filter {
    beginList: GameObject[];
    option: string;
    params: string[];
    constructor(config: FilterConfig) {
        this.beginList = config.beginList;
        this.option = config.option;
        this.params = config.params;
    }

    filter(): GameObject[] | null {
        const resultList: GameObject[] | null = [];

        if (this.option === 'price') {
            for (let i = 0; i < this.beginList.length; i++) {
                if (
                    this.beginList[i].price >= +this.params[0] &&
                    this.beginList[i].price <= +this.params[1]
                ) {
                    resultList.push(this.beginList[i]);
                }
            }
        }
        if (this.option === 'age') {
        }
        if (resultList.length !== 0) {
            return resultList;
        }
        return null;
    }
}
