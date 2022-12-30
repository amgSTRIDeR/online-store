import { ItemInCart } from '../interfaces/interfaces';

export class CartStorage {
    cartArray: object[];
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
    }

    addItem(itemId: number) {
        let isItemInArray = false;

        for (let i = 0; i < this.cartArray.length; i += 1) {
            const item: ItemInCart = <ItemInCart>this.cartArray[i];

            if (item.id === itemId) {
                item.quantity += 1;
                isItemInArray = true;
            }
        }

        if (!isItemInArray) {
            this.cartArray.push({ id: itemId, quantity: 1 });
        }
    }

    removeItem(itemId: number) {
        for (let i = 0; i < this.cartArray.length; i += 1) {
            const item: ItemInCart = <ItemInCart>this.cartArray[i];

            if (item.id === itemId) {
                this.cartArray.splice(i, 1);
                return;
            }
        }
    }

    decreaseQuantity(itemId: number) {
        for (let i = 0; i < this.cartArray.length; i += 1) {
            const item: ItemInCart = <ItemInCart>this.cartArray[i];

            if (item.id === itemId) {
                item.quantity -= 1;
                if (item.quantity === 0) {
                    this.removeItem(itemId);
                }
                return;
            }
        }
    }
}
