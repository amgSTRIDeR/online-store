import { ItemInCart } from '../interfaces/interfaces';
import { Promocodes } from '../interfaces/interfaces';
export declare class CartStorage {
    cartArray: ItemInCart[];
    promoArray: Promocodes[];
    private static instance;
    private constructor();
    static getInstance(): CartStorage;
    private saveItems;
    private loadItems;
    private loadPromo;
    addItem(itemId: number): void;
    removeItem(itemId: number): void;
    removePromo(itemId: number): void;
    decreaseQuantity(itemId: number): void;
    renewCartWidget(): void;
    renewSumWidget(): void;
    getItemStockNumber(itemId: number): number;
    addPromo(promocode: string): void;
    showPromo(promocode: string): void;
    getNumberOfItemsInCart(itemId: number): number;
}
//# sourceMappingURL=cart-singleton.d.ts.map