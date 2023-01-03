import { ItemInCart } from '../interfaces/interfaces';
import { GamesCollection } from '../../../public/gamesCollection';
import { CartPage } from '../../pages/basket/cart';
import { Promocodes } from '../interfaces/interfaces';
import { PromocodesCollection } from '../../../public/promocodes';

export class CartStorage {
    cartArray: ItemInCart[];
    promoArray: Promocodes[];
    private static instance: CartStorage;

    private constructor() {
        this.cartArray = this.loadItems() || [];
        this.promoArray = this.loadPromo() || [];
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
        localStorage.setItem('cartPromo', JSON.stringify(this.promoArray));
    }

    private loadItems() {
        if (localStorage.getItem('cartItems') !== null) {
            return <[]>JSON.parse(<string>localStorage.getItem('cartItems'));
        }
    }

    private loadPromo() {
        if (localStorage.getItem('cartPromo') !== null) {
            return <[]>JSON.parse(<string>localStorage.getItem('cartPromo'));
        }
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

    removePromo(itemId: number) {
        console.log(itemId);
        this.promoArray.forEach((e, i) => {
            if (e.id === itemId) {
                if (this.promoArray.length === 1) {
                    this.promoArray = [];
                } else {
                    this.promoArray.splice(i, 1);
                }
            }
        });

        this.renewSumWidget();
        CartPage.promoRender();
    }

    decreaseQuantity(itemId: number) {
        this.cartArray.forEach((e) => {
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
        const resultInfoAmount = document.querySelector('.info__amount_and_price__amount');
        let itemsCount = 0;

        this.cartArray.forEach((e) => {
            itemsCount += e.quantity;
        });

        if (cartWidget) {
            cartWidget.textContent = itemsCount.toString();
        }

        if (resultInfoAmount) {
            resultInfoAmount.textContent = `Количество единиц товара: ${itemsCount}`;
        }
    }

    renewSumWidget() {
        const sumWidget = document.querySelector('.widget__sum');
        const purePrice = document.querySelector('.pure-price');
        const promoPrice = document.querySelector('.promo-price');

        const promoDiscount = this.promoArray.reduce((sum, value) => sum + value.discount, 0);
        console.log(this.promoArray);
        let priceCount = 0;

        this.cartArray.forEach((e) => {
            priceCount +=
                (GamesCollection[e.id - 1].price / GamesCollection[e.id - 1].discountPercentage) *
                e.quantity;
        });

        const price = `${Math.round(priceCount)} $`;

        if (sumWidget) {
            sumWidget.textContent = price;
        }

        if (purePrice && promoPrice) {
            if (promoDiscount) {
                promoPrice.textContent = `     ${Math.round(
                    priceCount * ((100 - promoDiscount) / 100)
                )} $`;
                purePrice.textContent = `${price}`;
            } else {
                promoPrice.textContent = `${price}`;
            }
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

    addPromo(promocode: string) {
        let isPromoInArray = false;
        this.promoArray.forEach((e) => {
            if (e.code === promocode) {
                isPromoInArray = true;
            }
        });
        if (!isPromoInArray) {
            PromocodesCollection.forEach((e) => {
                if (e.code === promocode) {
                    this.promoArray.push(e);
                    this.renewCartWidget();
                    this.renewSumWidget();
                    CartPage.promoRender();
                }
            });
        }
    }
}
