import { FilterConfig, GameObject } from './store.interfaces';
import { QueryStorage } from '../../shared/singletons/query-singleton';
import { cardList } from './store.components';

export class Filter {
    beginList: GameObject[] | null;
    option: string;
    params: string[];
    constructor(config: FilterConfig) {
        this.beginList = config.beginList;
        this.option = config.option;
        this.params = config.params;
    }

    saveParams(): void {
        localStorage.setItem('hash', window.location.hash);
    }

    changeURL() {
        let finalLink = window.location.protocol + '//' + window.location.host + '/#store?';
        const queryList = new QueryStorage();
        queryList.changeParams(this.option, this.params);
        if (this.option === 'category') {
            const finalList = queryList.getList();

            if (finalList.price[0] !== '0' || finalList.price[1] !== '15000') {
                finalLink += 'price=' + finalList.price.join('↕') + '&';
            }
            if (finalList.gamers[0] !== '1' || finalList.gamers[1] !== '99') {
                finalLink += 'gamers=' + finalList.gamers.join('↕') + '&';
            }
            if (finalList.brand.length !== 0) {
                finalLink += 'brand=' + finalList.brand.join('↕') + '&';
            }
            if (finalList.category.length !== 0) {
                finalLink += 'category=' + finalList.category.join('↕') + '&';
            }
            this.saveParams();
            window.location.href = finalLink.slice(0, finalLink.length - 1);
        }
    }

    makeIdList(resultList: GameObject[] | null): number[] {
        let idList: number[] = [];
        if (resultList) {
            for (let i of resultList) {
                idList.push(i.id);
            }
        }

        return idList;
    }

    hideCards(resultList: GameObject[] | null) {
        let idList = this.makeIdList(resultList);
        const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card');
        for (let card of cards) {
            if (idList.includes(+card.id)) {
                card.style.display = 'grid';
            } else {
                card.style.display = 'none';
            }
        }
    }

    filter(): GameObject[] | null {
        let resultList: GameObject[] | null = [];
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

            if (this.option === 'brand') {
                if (this.params.length !== 0) {
                    for (let i = 0; i < this.beginList.length; i++) {
                        if (this.params.includes(this.beginList[i].brand)) {
                            resultList.push(this.beginList[i]);
                        }
                    }
                } else {
                    resultList = this.beginList;
                }
            }

            if (this.option === 'category') {
                if (this.params.length !== 0) {
                    for (let i = 0; i < this.beginList.length; i++) {
                        for (let criteria of this.beginList[i].category_ru) {
                            if (
                                this.params.includes(criteria) &&
                                !resultList.includes(this.beginList[i])
                            ) {
                                resultList.push(this.beginList[i]);
                            }
                        }
                    }
                } else {
                    resultList = this.beginList;
                }
                this.hideCards(resultList);
            }
            this.changeURL();
            if (resultList.length !== 0) {
                return resultList;
            }
        }

        return null;
    }
}
