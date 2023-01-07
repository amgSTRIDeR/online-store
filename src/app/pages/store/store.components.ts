import { PageComponent } from '../../core/components/page.component';
import { GamesCollection } from '../../../public/gamesCollection.js';
import {
    CardConfig,
    PriceConfig,
    GameObject,
    DualSliderConfig,
    CheckBoxConfig,
} from './store.interfaces';
import { CartStorage } from '../../shared/singletons/cart-singleton';
import { Filter } from './store.filters';

import { storePage } from './store';

export class CardComponent extends PageComponent {
    containerSelector: string;
    id: number;

    flagAdd: boolean | undefined;

    constructor(config: CardConfig) {
        super(config);
        this.containerSelector = config.containerSelector;
        this.id = config.id;

        this.flagAdd = false;
    }

    push(element: HTMLElement) {
        const cartButton = element.querySelector('.card__button');

        const cardProductAdd: CartStorage = CartStorage.getInstance();

        const idList: number[] = cardProductAdd.cartArray.map((el) => el.id);
        if (cartButton) {
            const picChange = cartButton.querySelector('g');
            if (picChange) {
                if (idList.includes(this.id)) {
                    this.flagAdd = true;
                    picChange.innerHTML = `
                    <path d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 h -6.021 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 H 86.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path>
                    <circle cx="28.88" cy="74.33" r="6.16" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "></circle>
                    <circle cx="74.59" cy="74.33" r="6.16" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "></circle>
                    <path d="M 62.278 19.546 L 52.237 19.546 L 45.237 19.546 L 35.197 19.546 C 33.264 19.546 31.697 21.113 31.697 23.046 C 31.697 24.979 33.264 26.546 35.197 26.546 L 45.237 26.546 L 52.237 26.546 L 62.278 26.546 C 64.211 26.546 65.778 24.979 65.778 23.046 C 65.778 21.113 64.211 19.546 62.278 19.546 Z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path>
                    `;
                }
                cartButton?.addEventListener('click', () => {
                    if (!this.flagAdd) {
                        cardProductAdd.addItem(this.id);
                        this.flagAdd = true;
                        picChange.innerHTML = `
                        <path d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 h -6.021 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 H 86.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path>
                        <circle cx="28.88" cy="74.33" r="6.16" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "></circle>
                        <circle cx="74.59" cy="74.33" r="6.16" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "></circle>
                        <path d="M 62.278 19.546 L 52.237 19.546 L 45.237 19.546 L 35.197 19.546 C 33.264 19.546 31.697 21.113 31.697 23.046 C 31.697 24.979 33.264 26.546 35.197 26.546 L 45.237 26.546 L 52.237 26.546 L 62.278 26.546 C 64.211 26.546 65.778 24.979 65.778 23.046 C 65.778 21.113 64.211 19.546 62.278 19.546 Z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path>
                        `;
                    } else {
                        cardProductAdd.removeItem(this.id);
                        this.flagAdd = false;
                        picChange.innerHTML = `
                        <path d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 h -6.021 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 H 86.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path>
                        <circle cx="28.88" cy="74.33" r="6.16" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "></circle>
                        <circle cx="74.59" cy="74.33" r="6.16" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "></circle>
                        <path d="M 62.278 19.546 H 52.237 V 9.506 c 0 -1.933 -1.567 -3.5 -3.5 -3.5 s -3.5 1.567 -3.5 3.5 v 10.04 h -10.04 c -1.933 0 -3.5 1.567 -3.5 3.5 s 1.567 3.5 3.5 3.5 h 10.04 v 10.04 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -10.04 h 10.041 c 1.933 0 3.5 -1.567 3.5 -3.5 S 64.211 19.546 62.278 19.546 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path>
                        `;
                    }
                });
            }
        }
    }

    render() {
        const element = document.createElement(this.selector);
        const container = document.querySelector(this.containerSelector);

        if (element) {
            element.innerHTML = this.template;
        } else {
            throw new Error(`Component with selector ${this.selector} wasn't found`);
        }
        if (container) {
            container.appendChild(element);
        }
        this.push(element);
    }
}

export class PriceComponent extends PageComponent {
    containerSelector: string;
    price: number;
    discount: number;
    constructor(config: PriceConfig) {
        super(config);
        this.containerSelector = config.containerSelector;
        this.price = config.price;
        this.discount = config.discount;
    }
    render() {
        const element = document.createElement(this.selector);
        const container = document.querySelector(this.containerSelector);

        if (element) {
            element.innerHTML = this.template;
        } else {
            throw new Error(`Component with selector ${this.selector} wasn't found`);
        }
        if (container) {
            container.appendChild(element);
        }
    }
}

export class DualSliderComponent {
    selector: string;
    leftSlider: string;
    rightSlider: string;
    leftRange: string;
    rightRange: string;
    option: string;

    constructor(config: DualSliderConfig) {
        this.selector = config.selector;
        this.leftSlider = config.leftSlider;
        this.rightSlider = config.rightSlider;
        this.leftRange = config.leftRange;
        this.rightRange = config.rightRange;
        this.option = config.option;
    }

    public getValues(): string[] {
        const sliderLeft: HTMLInputElement | null = document.querySelector(this.leftSlider);
        const sliderRight: HTMLInputElement | null = document.querySelector(this.rightSlider);
        if (sliderLeft && sliderRight) {
            const from: string = sliderLeft.value;
            const to: string = sliderRight.value;
            return [from, to];
        }
        return [];
    }

    public changeValues(from: string, to: string) {
        const sliderLeft: HTMLInputElement | null = document.querySelector(this.leftSlider);
        const sliderRight: HTMLInputElement | null = document.querySelector(this.rightSlider);
        const rangeLeft: HTMLInputElement | null = document.querySelector(this.leftRange);
        const rangeRight: HTMLInputElement | null = document.querySelector(this.rightRange);
        if (sliderLeft && sliderRight && rangeLeft && rangeRight) {
            sliderLeft.value = from;
            sliderRight.value = to;
            rangeLeft.value = from;
            rangeRight.value = to;
        }
    }

    fixLeftThumpPosition(
        sliderLeft: HTMLInputElement,
        sliderRight: HTMLInputElement,
        rangeLeft: HTMLInputElement
    ) {
        const [from, to] = this.getValues();
        if (Number(from) > Number(to)) {
            sliderLeft.value = to;
        } else {
            sliderLeft.value = from;
        }
        rangeLeft.value = sliderLeft.value;
    }

    fixRightThumpPosition(
        sliderLeft: HTMLInputElement,
        sliderRight: HTMLInputElement,
        rangeRight: HTMLInputElement
    ) {
        const [from, to] = this.getValues();

        if (Number(from) <= Number(to)) {
            sliderRight.value = to;
        } else {
            sliderRight.value = from;
        }
        rangeRight.value = sliderRight.value;
    }

    setAccess(currentTarget: HTMLInputElement) {
        if (Number(currentTarget.value) <= 0) {
            currentTarget.style.zIndex = '2';
        } else {
            currentTarget.style.zIndex = '0';
        }
    }

    changeThumbs(
        sliderLeft: HTMLInputElement,
        sliderRight: HTMLInputElement,
        rangeLeft: HTMLInputElement,
        rangeRight: HTMLInputElement
    ) {
        sliderLeft.addEventListener('input', () => {
            this.fixLeftThumpPosition(sliderLeft, sliderRight, rangeLeft);
        });
        sliderRight.addEventListener('input', () => {
            this.fixRightThumpPosition(sliderLeft, sliderRight, rangeRight);
        });

        sliderLeft.addEventListener('mouseup', () => {
            makeNewCollection();
        });
        sliderRight.addEventListener('mouseup', () => {
            makeNewCollection();
        });

        this.setAccess(sliderLeft);
    }

    render() {
        const slider: HTMLElement | null = document.querySelector(this.selector);
        if (slider) {
            const sliderLeft: HTMLInputElement | null = document.querySelector(this.leftSlider);
            const sliderRight: HTMLInputElement | null = document.querySelector(this.rightSlider);
            const rangeLeft: HTMLInputElement | null = document.querySelector(this.leftRange);
            const rangeRight: HTMLInputElement | null = document.querySelector(this.rightRange);
            if (sliderLeft && sliderRight && rangeLeft && rangeRight) {
                this.changeThumbs(sliderLeft, sliderRight, rangeLeft, rangeRight);
            }
        }
    }
}

export class CheckBoxComponent {
    selector: string;
    itemSelector: string;
    option: string;
    checkedValues: string[];
    constructor(config: CheckBoxConfig) {
        this.selector = config.selector;
        this.itemSelector = config.itemSelector;
        this.option = config.option;
        this.checkedValues = [];
    }

    addRemove(checkbox: HTMLInputElement) {
        console.log('asdas');
        if (this.checkedValues.includes(checkbox.name)) {
            const index: number = this.checkedValues.indexOf(checkbox.name);
            this.checkedValues.splice(index, 1);
        } else {
            this.checkedValues.push(checkbox.name);
        }
        makeNewCollection();
    }

    public getValues(): string[] {
        return this.checkedValues;
    }

    public changeValues(checkedList: string[]) {
        this.checkedValues = checkedList;

        const checkBoxContainer: HTMLElement | null = document.querySelector(this.selector);
        if (checkBoxContainer) {
            const checkBoxItems: NodeListOf<HTMLInputElement> | null =
                checkBoxContainer.querySelectorAll(this.itemSelector);

            if (checkBoxItems) {
                for (let item of checkBoxItems) {
                    if (checkedList.includes(item.name)) {
                        item.checked = true;
                    } else {
                        item.checked = false;
                    }
                }
            }
        }
    }

    render() {
        const checkBoxContainer: HTMLElement | null = document.querySelector(this.selector);
        if (checkBoxContainer) {
            const checkBoxItems: NodeListOf<HTMLInputElement> | null =
                checkBoxContainer.querySelectorAll(this.itemSelector);
            if (checkBoxItems) {
                for (let i of checkBoxItems) {
                    i.addEventListener('change', () => {
                        this.addRemove(i);
                    });
                }
            }
        }
    }
}

export const priceSlider = new DualSliderComponent({
    selector: '.price-slider__wrapper',
    leftSlider: '.price-slider__from-slider',
    rightSlider: '.price-slider__to-slider',
    leftRange: '.price-slider__min__input',
    rightRange: '.price-slider__max__input',
    option: 'price',
});

export const playersSlider = new DualSliderComponent({
    selector: '.players-number__wrapper',
    leftSlider: '.players-number__from-slider',
    rightSlider: '.players-number__to-slider',
    leftRange: '.players-number__min__input',
    rightRange: '.players-number__max__input',
    option: 'gamers',
});

export const categoryBox = new CheckBoxComponent({
    selector: '.sets__list',
    itemSelector: '.sets__checkbox',
    option: 'category',
});

export const producerBox = new CheckBoxComponent({
    selector: '.sets-maker',
    itemSelector: '.sets__checkbox',
    option: 'brand',
});

let cardList: CardComponent[] = [];
function makeNewCollection() {
    const filterList: object[] = [
        { price: priceSlider },
        { gamers: playersSlider },
        { brand: producerBox },
        { category: categoryBox },
    ];
    let listOfGames: GameObject[] | null = GamesCollection;
    for (let item of filterList) {
        listOfGames = new Filter({
            beginList: listOfGames,
            option: Object.keys(item)[0],
            params: Object.values(item)[0].getValues(),
        }).filter();
    }
}

function makeCardList(gameList: GameObject[] | null) {
    let container = document.querySelector('.cards');
    if (container) {
        container.innerHTML = '';
    }
    cardList = [];

    if (gameList) {
        var card;
        for (let i = 0; i < gameList.length - 1; i += 1) {
            card = new CardComponent({
                template: `
              <div class="card" id = "${gameList[i].id}">
            <h3 class="card__title">${gameList[i].title_ru}</h3>
            <p class="card__subtitle">${gameList[i].subtittle_ru}</p>
            <img class="card__image" src="${gameList[i].thumbnail}" alt="">
            <button class="card__button">
              <p class="card__price"><span class="card__price-old">${gameList[i].price}$</span> ${
                    gameList[i].discountPercentage
                }$</p>
              <svg class="card__cart-image" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1" viewBox="0 0 256 256" xml:space="preserve">
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                  <path
                    d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 h -6.021 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 H 86.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z"
                    style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;"
                    transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <circle cx="28.88" cy="74.33" r="6.16"
                    style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;"
                    transform="  matrix(1 0 0 1 0 0) " />
                  <circle cx="74.59" cy="74.33" r="6.16"
                    style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;"
                    transform="  matrix(1 0 0 1 0 0) " />
                  <path
                    d="M 62.278 19.546 H 52.237 V 9.506 c 0 -1.933 -1.567 -3.5 -3.5 -3.5 s -3.5 1.567 -3.5 3.5 v 10.04 h -10.04 c -1.933 0 -3.5 1.567 -3.5 3.5 s 1.567 3.5 3.5 3.5 h 10.04 v 10.04 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -10.04 h 10.041 c 1.933 0 3.5 -1.567 3.5 -3.5 S 64.211 19.546 62.278 19.546 z"
                    style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;"
                    transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
              </svg>
            </button>
            <div class="card__rating">
              <svg class="card__rating-image" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 940.688 940.688" xml:space="preserve">
                <g>
                  <path d="M885.344,319.071l-258-3.8l-102.7-264.399c-19.8-48.801-88.899-48.801-108.6,0l-102.7,264.399l-258,3.8
             c-53.4,3.101-75.1,70.2-33.7,103.9l209.2,181.4l-71.3,247.7c-14,50.899,41.1,92.899,86.5,65.899l224.3-122.7l224.3,122.601
             c45.4,27,100.5-15,86.5-65.9l-71.3-247.7l209.2-181.399C960.443,389.172,938.744,322.071,885.344,319.071z" />
              </svg>
              <p class="card__rating-number">4</p>
            </div>
            <svg class="card__sale-image" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288.359 288.359" xml:space="preserve">
              <g>
                <path d="M283.38,4.98c-3.311-3.311-7.842-5.109-12.522-4.972L163.754,3.166c-4.334,0.128-8.454,1.906-11.52,4.972L4.979,155.394
             c-6.639,6.639-6.639,17.402,0,24.041L108.924,283.38c6.639,6.639,17.402,6.639,24.041,0l147.256-147.256
             c3.065-3.065,4.844-7.186,4.972-11.52l3.159-107.103C288.49,12.821,286.691,8.291,283.38,4.98z M247.831,130.706L123.128,255.407
             c-1.785,1.785-4.679,1.785-6.464,0l-83.712-83.712c-1.785-1.785-1.785-4.679,0-6.464L157.654,40.529
             c1.785-1.785,4.679-1.785,6.464,0l83.713,83.713C249.616,126.027,249.616,128.921,247.831,130.706z M263.56,47.691
             c-6.321,6.322-16.57,6.322-22.892,0c-6.322-6.321-6.322-16.57,0-22.892c6.321-6.322,16.569-6.322,22.892,0
             C269.882,31.121,269.882,41.37,263.56,47.691z" />
                <path d="M99.697,181.278c-5.457,2.456-8.051,3.32-10.006,1.364c-1.592-1.591-1.5-4.411,1.501-7.412
             c1.458-1.458,2.927-2.52,4.26-3.298c1.896-1.106,2.549-3.528,1.467-5.438l-0.018-0.029c-0.544-0.96-1.455-1.658-2.522-1.939
             c-1.067-0.279-2.202-0.116-3.147,0.453c-1.751,1.054-3.64,2.48-5.587,4.428c-7.232,7.23-7.595,15.599-2.365,20.829
             c4.457,4.457,10.597,3.956,17.463,0.637c5.004-2.364,7.55-2.729,9.46-0.819c2.002,2.002,1.638,5.004-1.545,8.186
             c-1.694,1.694-3.672,3.044-5.582,4.06c-0.994,0.528-1.728,1.44-2.027,2.525c-0.3,1.085-0.139,2.245,0.443,3.208l0.036,0.06
             c1.143,1.889,3.575,2.531,5.503,1.457c2.229-1.241,4.732-3.044,6.902-5.215c8.412-8.412,8.002-16.736,2.864-21.875
             C112.475,178.141,107.109,177.868,99.697,181.278z" />
                <path d="M150.245,157.91l-31.508-16.594c-1.559-0.821-3.47-0.531-4.716,0.714l-4.897,4.898c-1.25,1.25-1.537,3.169-0.707,4.73
             l16.834,31.654c0.717,1.347,2.029,2.274,3.538,2.5c1.509,0.225,3.035-0.278,4.114-1.357c1.528-1.528,1.851-3.89,0.786-5.771
             l-3.884-6.866l8.777-8.777l6.944,3.734c1.952,1.05,4.361,0.696,5.928-0.871c1.129-1.129,1.654-2.726,1.415-4.303
             C152.63,160.023,151.657,158.653,150.245,157.91z M125.621,165.632c0,0-7.822-13.37-9.187-15.644l0.091-0.092
             c2.274,1.364,15.872,8.959,15.872,8.959L125.621,165.632z" />
                <path d="M173.694,133.727c-1.092,0-2.139,0.434-2.911,1.205l-9.278,9.278l-21.352-21.352c-0.923-0.923-2.175-1.441-3.479-1.441
             s-2.557,0.519-3.479,1.441c-1.922,1.922-1.922,5.037,0,6.958l24.331,24.332c1.57,1.569,4.115,1.569,5.685,0l13.395-13.395
             c1.607-1.607,1.607-4.213,0-5.821C175.833,134.16,174.786,133.727,173.694,133.727z" />
                <path d="M194.638,111.35l-9.755,9.755l-7.276-7.277l8.459-8.458c1.557-1.558,1.557-4.081-0.001-5.639
             c-1.557-1.557-4.082-1.557-5.639,0l-8.458,8.458l-6.367-6.366l9.117-9.117c1.57-1.57,1.57-4.115,0-5.686
             c-0.754-0.755-1.776-1.179-2.843-1.179c-1.066,0-2.089,0.424-2.843,1.178l-13.234,13.233c-0.753,0.754-1.177,1.776-1.177,2.843
             c0,1.066,0.424,2.089,1.178,2.843l24.968,24.968c1.57,1.569,4.115,1.569,5.685,0l13.87-13.87c1.57-1.57,1.57-4.115,0-5.686
             C198.752,109.78,196.208,109.78,194.638,111.35z" />
            </svg>
            <ul class="card__info">
              <li class="card__info-stock">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                  style="enable-background:new 0 0 512 512;" xml:space="preserve" fill="#ffffff">
                  <g>
                    <path
                      d="M464.7,347.8h23.2V162.3l0,0c0-24.8-13.3-47.8-34.8-60.2L453,102L290.7,9.3l0.1,0.1C280,3.1,268,0,256,0
            c-12,0-24,3.1-34.8,9.3l0.1-0.1L59,102l-0.1,0.1c-21.5,12.4-34.8,35.3-34.8,60.2v185.5v0c0,24.8,13.3,47.8,34.8,60.2l0.1,0.1
            l162.3,92.8l-0.1-0.1c10.8,6.2,22.8,9.3,34.8,9.3c12,0,24-3.1,34.8-9.3l-0.1,0.1L453,408.1l0.1-0.1c21.5-12.4,34.8-35.4,34.8-60.2
            l0,0H464.7l-23.2,0c0,8.3-4.4,15.9-11.6,20.1l0.1-0.1l-162.3,92.8l-0.1,0.1c-3.6,2.1-7.6,3.1-11.6,3.1c-4,0-8-1-11.6-3.1l-0.1-0.1
            L82,367.8l0.1,0.1c-7.2-4.1-11.6-11.8-11.6-20.1l0,0V162.3c0-8.2,4.4-15.9,11.6-20l-0.1,0.1l162.3-92.8l0.1-0.1
            c3.6-2.1,7.6-3.1,11.6-3.1c4,0,8,1,11.6,3.1l0.1,0.1L430,142.3l-0.1-0.1c7.2,4.1,11.6,11.8,11.6,20.1v0v185.5v0L464.7,347.8z" />
                    <path d="M41.9,158.2l202.5,117.1c7.2,4.1,16.1,4.1,23.2,0l202.5-117.1c11.1-6.4,14.9-20.6,8.5-31.7s-20.6-14.9-31.7-8.5L256,228.5
            L65.2,118.1c-11.1-6.4-25.3-2.6-31.7,8.5C27.1,137.6,30.9,151.8,41.9,158.2L41.9,158.2z" />
                    <path d="M279.2,488.8V255c0-12.8-10.4-23.2-23.2-23.2c-12.8,0-23.2,10.4-23.2,23.2v233.8c0,12.8,10.4,23.2,23.2,23.2
            C268.8,512,279.2,501.6,279.2,488.8" />
                  </g>
                </svg>
                ${gameList[i].stock}
              </li>
              <li class="card__info-players">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                  style="enable-background:new 0 0 512 512;" xml:space="preserve" fill="#ffffff">
                  <g id="XMLID_2_">
                    <path id="XMLID_8_"
                      d="M349.1,232.3c38.2,0,69.8-31.7,69.8-69.8s-30.7-69.8-69.8-69.8s-69.8,31.7-69.8,69.8
                 S310.9,232.3,349.1,232.3z M162.9,232.3c38.2,0,69.8-31.7,69.8-69.8S202,92.6,162.9,92.6s-69.8,31.7-69.8,69.8
                 S124.7,232.3,162.9,232.3z M162.9,278.8c-54,0-162.9,27-162.9,81.9v58.6h325.8v-58.6C325.8,305.8,216.9,278.8,162.9,278.8z
                  M349.1,278.8c-6.5,0-14,0.9-22.3,0.9c27,19.5,45.6,45.6,45.6,80.1v58.6H512v-58.6C512,305.8,403.1,278.8,349.1,278.8z" />
                  </g>
                </svg>
                ${gameList[i].gamers.join('-')}
              </li>
              <li class="card__info-time">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                  style="enable-background:new 0 0 512 512;" xml:space="preserve" fill="#ffffff">
                  <g id="XMLID_1_">
                    <path id="XMLID_3_" d="M256,512C114.5,512,0,397.5,0,256c0-69.8,27.9-135.9,78.2-184.3c8.4-8.4,21.4-7.4,28.9,0.9
                 c8.4,8.4,7.4,21.4-0.9,28.9C63.3,142.4,40,197.4,40,256c0,118.2,96.8,215,215,215s216-96.8,216-215c0-111.7-85.6-203.9-194.6-214.1
                 v80.1c0,11.2-9.3,20.5-20.5,20.5c-11.2,0-20.5-9.3-20.5-20.5V20.5C235.5,9.3,244.8,0,256,0c141.5,0,256,114.5,256,256
                 S397.5,512,256,512z" />
                    <path id="XMLID_4_" d="M153.6,135.9l127.5,91.2c17.7,12.1,21.4,36.3,9.3,54s-36.3,21.4-54,9.3c-3.7-2.8-6.5-5.6-9.3-9.3
                 l-91.2-127.5c-3.7-5.6-2.8-14,2.8-17.7C143.4,132.2,148.9,132.2,153.6,135.9z" />
                  </g>
                </svg>${gameList[i].GameTime.join('-')}
              </li>
              <li class="card__info-age">${gameList[i].age[0]}+
              </li>
            </ul>
          </div>
              `,
                selector: 'card',
                containerSelector: '.cards',
                id: gameList[i].id,
            });
            cardList.push(card);
        }
    }
    return cardList;
}

makeCardList(GamesCollection);

export { cardList };

// document.addEventListener('load', () => {
//     console.log('dsfd');
// });
