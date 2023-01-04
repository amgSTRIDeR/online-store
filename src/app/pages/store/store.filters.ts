import { FilterConfig, GameObject } from './store.interfaces';

export class Filter {
    beginList: GameObject[] | null;
    option: string;
    params: string[];
    constructor(config: FilterConfig) {
        this.beginList = config.beginList;
        this.option = config.option;
        this.params = config.params;
    }

    completeURL() {
        let finalLink: string = window.location.protocol + '//' + window.location.host + '/#store';
        if (this.option === 'price') {
            finalLink += '?' + this.option + '=' + this.params[0] + '&' + this.params[1];
        }
        window.location.href = finalLink;
    }

    filter(): GameObject[] | null {
        const resultList: GameObject[] | null = [];
        if (this.beginList) {
            if (this.option === 'price') {
                for (let i = 0; i < this.beginList.length; i++) {
                    if (
                        this.beginList[i].price >= +this.params[0] &&
                        this.beginList[i].price <= +this.params[1]
                    ) {
                        this.completeURL();
                        resultList.push(this.beginList[i]);
                    }
                }
            }
            if (this.option === 'gamers') {
                for (let i = 0; i < this.beginList.length; i++) {
                    if (this.beginList[i].gamers.length > 1) {
                        if (
                            (this.beginList[i].gamers[0] >= +this.params[0] &&
                                this.beginList[i].gamers[0] <= +this.params[1]) ||
                            (this.beginList[i].gamers[1] >= +this.params[0] &&
                                this.beginList[i].gamers[1] <= +this.params[1])
                        ) {
                            resultList.push(this.beginList[i]);
                        }
                    } else if (this.beginList[i].gamers.length === 1) {
                        if (
                            this.beginList[i].gamers[0] >= +this.params[0] &&
                            this.beginList[i].gamers[0] <= +this.params[1]
                        ) {
                            resultList.push(this.beginList[i]);
                        }
                    } else {
                        if (+this.params[i] === 1) {
                            resultList.push(this.beginList[i]);
                        }
                    }
                }
            }
            if (resultList.length !== 0) {
                return resultList;
            }
        }

        return null;
    }
}
