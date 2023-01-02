import { ItemInCart } from '../interfaces/interfaces';
import { GamesCollection } from '../../../public/gamesCollection';
import { CartPage } from '../../pages/basket/cart';

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
        this.renewSumWidget();
    }

    addItem(itemId: number) {
        let isItemInArray = false;

        for (let i = 0; i < this.cartArray.length; i += 1) {
            const item: ItemInCart = this.cartArray[i];

            if (item.id === itemId) {
                if (item.stock) {
                    item.stock -= 1;
                    item.quantity += 1;
                }
                isItemInArray = true;
            }
        }

        if (!isItemInArray) {
            const itemStock = GamesCollection[itemId - 1].stock;
            if (itemStock) {
                this.cartArray.push({ id: itemId, quantity: 1, stock: itemStock - 1 });
            }
        }
        this.renewCartWidget();
        this.renewSumWidget();
        CartPage.cardsRender();
    }

    removeItem(itemId: number) {
        this.cartArray.forEach((e, i) => {
            if (e.id === itemId) {
                if (this.cartArray.length === 1) {
                    this.cartArray = [];
                } else {
                    this.cartArray.splice(i, 1);
                }
            }
        });

        this.renewCartWidget();
        this.renewSumWidget();
        CartPage.cardsRender();
    }

    decreaseQuantity(itemId: number) {
        this.cartArray.forEach((e, i) => {
            if (e.id === itemId) {
                e.stock += 1;
                e.quantity -= 1;

                if (e.quantity === 0) {
                    this.removeItem(itemId);
                }

                this.renewCartWidget();
                this.renewSumWidget();
                CartPage.cardsRender();
            }
        });
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

    renewSumWidget() {
        const sumWidget = document.querySelector('.widget__sum');
        let priceCount = 0;

        this.cartArray.forEach((e) => {
            priceCount +=
                (GamesCollection[e.id - 1].price / GamesCollection[e.id - 1].discountPercentage) *
                e.quantity;
        });

        if (sumWidget) {
            sumWidget.textContent = priceCount.toString() + ' $';
        }
    }

    getItemStockNumber(itemId: number): number {
        let inStock = 0;

        this.cartArray.forEach((e) => {
            if (e.id === itemId) {
                inStock = e.stock;
            }
        });

        return inStock;
    }
}
