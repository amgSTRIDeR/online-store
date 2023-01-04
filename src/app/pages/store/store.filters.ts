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

    changeURL() {
        if (this.option === 'price' && (this.params[0] !== '0' || this.params[1] !== '15000')) {
            if (!window.location.href.includes(this.option)) {
                window.location.href +=
                    '?' + this.option + '=' + this.params[0] + '↕' + this.params[1];
            } else {
                window.location.href =
                    window.location.href.slice(0, 28) +
                    '?' +
                    this.option +
                    '=' +
                    this.params[0] +
                    '↕' +
                    this.params[1];
            }
        } else if (
            this.option === 'gamers' &&
            (this.params[0] !== '1' || this.params[1] !== '99')
        ) {
            if (!window.location.href.includes(this.option)) {
                window.location.href +=
                    '?' + this.option + '=' + this.params[0] + '↕' + this.params[1];
            }
        }
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
                        resultList.push(this.beginList[i]);
                    }
                }
                this.changeURL();
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
                this.changeURL();
            }

            if (resultList.length !== 0) {
                return resultList;
            }
        }

        return null;
    }
}
