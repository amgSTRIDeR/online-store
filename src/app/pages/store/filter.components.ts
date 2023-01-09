import { DualSliderConfig, CheckBoxConfig } from './store.interfaces';
import { makeNewCollection } from './store.components';

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
        makeNewCollection();
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
                for (const item of checkBoxItems) {
                    if (checkedList.includes(item.name)) {
                        item.checked = true;
                    } else {
                        item.checked = false;
                    }
                }
                makeNewCollection();
            }
        }
    }

    render() {
        const checkBoxContainer: HTMLElement | null = document.querySelector(this.selector);
        if (checkBoxContainer) {
            const checkBoxItems: NodeListOf<HTMLInputElement> | null =
                checkBoxContainer.querySelectorAll(this.itemSelector);
            if (checkBoxItems) {
                for (const i of checkBoxItems) {
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
