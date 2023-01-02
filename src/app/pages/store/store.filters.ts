import { GamesCollection } from '../../../public/gamesCollection.js';

interface dualSliderConfig {
    selector: string;
    leftSlider: string;
    rightSlider: string;
    leftRange: string;
    rightRange: string;
}

export class DualSliderComponent {
    selector: string;
    leftSlider: string;
    rightSlider: string;
    leftRange: string;
    rightRange: string;
    constructor(config: dualSliderConfig) {
        this.selector = config.selector;
        this.leftSlider = config.leftSlider;
        this.rightSlider = config.rightSlider;
        this.leftRange = config.leftRange;
        this.rightRange = config.rightRange;
    }

    getValues(sliderLeft: HTMLInputElement, sliderRight: HTMLInputElement): string[] {
        const from: string = sliderLeft.value;
        const to: string = sliderRight.value;
        return [from, to];
    }
    fixLeftThumpPosition(
        sliderLeft: HTMLInputElement,
        sliderRight: HTMLInputElement,
        rangeLeft: HTMLInputElement
    ) {
        const [from, to] = this.getValues(sliderLeft, sliderRight);
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
        const [from, to] = this.getValues(sliderLeft, sliderRight);

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

export const priceSlider = new DualSliderComponent({
    selector: '.price-slider__wrapper',
    leftSlider: '.price-slider__from-slider',
    rightSlider: '.price-slider__to-slider',
    leftRange: '.price-slider__min__input',
    rightRange: '.price-slider__max__input',
});
