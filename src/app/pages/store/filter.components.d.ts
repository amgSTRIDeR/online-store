import { DualSliderConfig, CheckBoxConfig } from './store.interfaces';
export declare class DualSliderComponent {
    selector: string;
    leftSlider: string;
    rightSlider: string;
    leftRange: string;
    rightRange: string;
    option: string;
    constructor(config: DualSliderConfig);
    getValues(): string[];
    changeValues(from: string, to: string): void;
    fixLeftThumpPosition(sliderLeft: HTMLInputElement, sliderRight: HTMLInputElement, rangeLeft: HTMLInputElement): void;
    fixRightThumpPosition(sliderLeft: HTMLInputElement, sliderRight: HTMLInputElement, rangeRight: HTMLInputElement): void;
    setAccess(currentTarget: HTMLInputElement): void;
    changeThumbs(sliderLeft: HTMLInputElement, sliderRight: HTMLInputElement, rangeLeft: HTMLInputElement, rangeRight: HTMLInputElement): void;
    render(): void;
}
export declare class CheckBoxComponent {
    selector: string;
    itemSelector: string;
    option: string;
    checkedValues: string[];
    constructor(config: CheckBoxConfig);
    addRemove(checkbox: HTMLInputElement): void;
    getValues(): string[];
    changeValues(checkedList: string[]): void;
    render(): void;
}
export declare const priceSlider: DualSliderComponent;
export declare const playersSlider: DualSliderComponent;
export declare const categoryBox: CheckBoxComponent;
export declare const producerBox: CheckBoxComponent;
//# sourceMappingURL=filter.components.d.ts.map