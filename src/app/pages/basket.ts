import Page from '../core/template/base';

class BasketPage extends Page {
    constructor(pageID: string) {
        super(pageID);
    }

    render() {
        if (this.container) {
            this.container.innerHTML = `
            <div>
    <section class="basket__head_info">
        <h2 class="basket__head_info__header">Корзина</h2>
        <div class="basket__head_info__page_control">
            <p class="basket__head_info__page_control__pages">
                Страница
                <button class="arrow__left small_button">&lt;</button> 1/2
                <button class="arrow__right small_button">&gt;</button>
            </p>
            <p class="basket__head_info__page_control__prod_amount">
                Количество товаров на странице
                <button class="arrow__left small_button">&lt;</button> 3
                <button class="arrow__right small_button">&gt;</button>
            </p>
        </div>
    </section>
    <section class="basket__cards">
        <div class="basket__cards__card">
            <div class="card__main_info">
                <h3 class="card__main_info_num">1</h3>
                <div class="card__main_info__photo">
                    <img
                        src="../src/assets/images/ancient_evil.png"
                        alt="Photo of the game"
                        class="photo"
                        width="111"
                    />
                    <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                </div>
                <div class="card__main_info__head_info">
                    <p>Название: Древний ужас</p>
                    <p>Категория: Кооперативные игры</p>
                    <p>Производитель: Hobby world</p>
                    <p>Количество игроков: 1-8</p>
                    <p>Время игры: 128-180 минут</p>
                    <p>На складе: 18</p>
                </div>
                <dev class="card__main_info__amount">
                    <p class="card__main_info__amount__special">Акция!</p>
                    <div class="card__main_info__amount__of_products">
                        <button class="num_button">-</button>
                        <input
                            type="text"
                            readonly="readonly"
                            value="2"
                            class="number_of_products"
                        />
                        <button class="num_button">+</button>
                    </div>
                    <div class="card__main_info__amount__price">
                        <p class="price">130$</p>
                        <p class="new_price">110$</p>
                    </div>
                </dev>
                <dev class="card__main_info__cross small_button">X</dev>
            </div>
            <div class="card__description">
                Разработчики, вдохновившись атмосферой и величием "Ужаса Аркхэма", создали
                настольную игру "Древний Ужас", действие которой происходит в той же вселенной.
                "Древний Ужас" – это уникальная, захватывающая настольная игра в жанре приключений,
                созданная специально для бесстрашных авантюристов, которые готовы бросить вызов
                судьбе и богам.
            </div>
        </div>

        <!--  -->
        <div class="basket__cards__card">
            <div class="card__main_info">
                <h3 class="card__main_info_num">2</h3>
                <div class="card__main_info__photo">
                    <img
                        src="../src/assets/images/ancient_evil.png"
                        alt="Photo of the game"
                        class="photo"
                        width="111"
                    />
                    <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                </div>
                <div class="card__main_info__head_info">
                    <p>Название: Древний ужас</p>
                    <p>Категория: Кооперативные игры</p>
                    <p>Производитель: Hobby world</p>
                    <p>Количество игроков: 1-8</p>
                    <p>Время игры: 128-180 минут</p>
                    <p>На складе: 18</p>
                </div>
                <dev class="card__main_info__amount">
                    <p class="card__main_info__amount__special"></p>
                    <div class="card__main_info__amount__of_products">
                        <button class="num_button">-</button>
                        <input
                            type="text"
                            readonly="readonly"
                            value="2"
                            class="number_of_products"
                        />
                        <button class="num_button">+</button>
                    </div>
                    <div class="card__main_info__amount__price">
                        <p class="price">130$</p>
                    </div>
                </dev>
                <dev class="card__main_info__cross small_button">X</dev>
            </div>
            <div class="card__description">
                Разработчики, вдохновившись атмосферой и величием "Ужаса Аркхэма", создали
                настольную игру "Древний Ужас", действие которой происходит в той же вселенной.
                "Древний Ужас" – это уникальная, захватывающая настольная игра в жанре приключений,
                созданная специально для бесстрашных авантюристов, которые готовы бросить вызов
                судьбе и богам.
            </div>
        </div>
        <!--  -->
        <div class="basket__cards__card">
            <div class="card__main_info">
                <h3 class="card__main_info_num">3</h3>
                <div class="card__main_info__photo">
                    <img
                        src="../src/assets/images/ancient_evil.png"
                        alt="Photo of the game"
                        class="photo"
                        width="111"
                    />
                    <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                </div>

                <div class="card__main_info__head_info">
                    <p>Название: Древний ужас</p>
                    <p>Категория: Кооперативные игры</p>
                    <p>Производитель: Hobby world</p>
                    <p>Количество игроков: 1-8</p>
                    <p>Время игры: 128-180 минут</p>
                    <p>На складе: 18</p>
                </div>
                <dev class="card__main_info__amount">
                    <p class="card__main_info__amount__special"></p>
                    <div class="card__main_info__amount__of_products">
                        <button class="num_button">-</button>
                        <input
                            type="text"
                            readonly="readonly"
                            value="2"
                            class="number_of_products"
                        />
                        <button class="num_button">+</button>
                    </div>
                    <div class="card__main_info__amount__price">
                        <p class="price">130$</p>
                    </div>
                </dev>
                <dev class="card__main_info__cross small_button">X</dev>
            </div>
            <div class="card__description">
                Разработчики, вдохновившись атмосферой и величием "Ужаса Аркхэма", создали
                настольную игру "Древний Ужас", действие которой происходит в той же вселенной.
                "Древний Ужас" – это уникальная, захватывающая настольная игра в жанре приключений,
                созданная специально для бесстрашных авантюристов, которые готовы бросить вызов
                судьбе и богам.
            </div>
        </div>
    </section>
    <section class="basket__result">
        <h2 class="basket__result__name">Итого:</h2>
        <div class="basket__result__info">
            <div class="info__amount_and_price">
                <p class="info__amount_and_price__amount">Количество единиц товара: 6</p>
                <p class="info__amount_and_price__price">На сумму: 300$</p>
            </div>
            <div class="info__promocode">
                <input
                    type="text"
                    value="Введите промокод"
                    autocomplite="on"
                    class="info__promocode__enter"
                />
                <p class="info__promocode__freshman">
                    Промокод newCustomer 7% <button class="small_button">X</button>
                </p>
                <p class="info__promocode__other">
                    Промокод birthday 12% <button class="small_button">X</button>
                </p>
            </div>
            <button class="info__buy_now">Купить сейчас</button>
        </div>
    </section>
</div>`;
        }
        return this.container;
    }
}

export default BasketPage;
