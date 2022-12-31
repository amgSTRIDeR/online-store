import { ItemInCart } from '../interfaces/interfaces';

import { GamesCollection } from '../../../public/gamesCollection';
//"widget__sum sum-text
export class CartStorage {
    cartArray: ItemInCart[];
    private static instance: CartStorage;

    private constructor() {
        this.cartArray = this.loadItems() || [];
        window.addEventListener('beforeunload', () => {
            this.saveItems();
        });
    }

    public static getInstance(): CartStorage {
        if (!CartStorage.instance) {
            CartStorage.instance = new CartStorage();
        }

        return CartStorage.instance;
    }

    private saveItems() {
        localStorage.setItem('cartItems', JSON.stringify(this.cartArray));
    }

    private loadItems() {
        if (localStorage.getItem('cartItems') !== null) {
            return <[]>JSON.parse(<string>localStorage.getItem('cartItems'));
        }
        this.renewCartWidget();
    }

    addItem(itemId: number) {
        let isItemInArray = false;

        for (let i = 0; i < this.cartArray.length; i += 1) {
            const item: ItemInCart = this.cartArray[i];

            if (item.id === itemId) {
                item.quantity += 1;
                isItemInArray = true;
            }
        }

        if (!isItemInArray) {
            this.cartArray.push({ id: itemId, quantity: 1 });
        }
        this.renewCartWidget();
    }

    removeItem(itemId: number) {
        for (let i = 0; i < this.cartArray.length; i += 1) {
            const item: ItemInCart = this.cartArray[i];

            if (item.id === itemId) {
                this.cartArray.splice(i, 1);
                this.renewCartWidget();
                return;
            }
        }
    }

    decreaseQuantity(itemId: number) {
        for (let i = 0; i < this.cartArray.length; i += 1) {
            const item: ItemInCart = this.cartArray[i];

            if (item.id === itemId) {
                item.quantity -= 1;
                if (item.quantity === 0) {
                    this.removeItem(itemId);
                }
                this.renewCartWidget();
                return;
            }
        }
    }

    renewCartWidget() {
        const cartWidget = document.querySelector('.sum-text');
        let itemsCount = 0;

        this.cartArray.forEach((e) => {
            itemsCount += e.quantity;
        });

        if (cartWidget) {
            cartWidget.textContent = itemsCount.toString();
        }
    }
}
