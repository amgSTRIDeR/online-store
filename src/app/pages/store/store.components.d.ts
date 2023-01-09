import { PageComponent } from '../../core/components/page.component';
import { CardConfig, PriceConfig, QuantityConfig } from './store.interfaces';
export declare class CardComponent extends PageComponent {
    containerSelector: string;
    id: number;
    discount: number;
    price: number;
    flagAdd: boolean | undefined;
    constructor(config: CardConfig);
    checkSale(element: HTMLDivElement): void;
    push(element: HTMLElement): void;
    render(): void;
}
export declare class PriceComponent extends PageComponent {
    containerSelector: string;
    price: number;
    discount: number;
    constructor(config: PriceConfig);
    render(): void;
}
export declare class QuantityComponent extends PageComponent {
    constructor(config: QuantityConfig);
    setAmount(amount: number): void;
    render(): void;
}
export declare const productQuantity: QuantityComponent;
declare let cardList: CardComponent[];
export declare function makeNewCollection(): void;
export { cardList };
//# sourceMappingURL=store.components.d.ts.map