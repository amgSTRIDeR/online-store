import { PageComponent } from '../core/components/page.component';

export const productPage = new PageComponent({
    template: `<section>
    <h2>Главная/Каталог/Кооперативные игры/Древний ужас</h2>
    <section class="about">
        <div class="about__main_info">
            <div class="about__main_info__photo">
                <img
                    src="../src/assets/images/ancient_evil.png"
                    alt="photo of game"
                    class="about__main_info__photo__pic"
                    width="320"
                    height="320"
                />
                <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
            </div>
            <div class="about__main_info__info">
                <p>Категория: Кооперативные игры</p>
                <p>Производитель: Hobby world</p>
                <p>Количество игроков: 1-8</p>
                <p>Время игры: 128-180 минут</p>
                <p>На складе: 18</p>
                <p>Акция 130$ <strong>150$</strong></p>
                <div class="about__main_info__info__amount">
                    <button class="num_button">-</button>
                    <input type="text" readonly="readonly" value="2" class="amount" />
                    <button class="num_button">+</button>
                </div>
                <button class="about__main_info__info__buy">Купить сейчас</button>
            </div>
        </div>
        <div class="about__gallery">
            <button class="about__gallery__arrow left">&#8592;</button>
            <div class="about__gallery__photoes">
                <img
                    src="../src/assets/images/game1.png"
                    alt=""
                    class="about__gallery__photoes__photo"
                />
                <img
                    src="../src/assets/images/game2.png"
                    alt=""
                    class="about__gallery__photoes__photo"
                />
                <img
                    src="../src/assets/images/game3.png"
                    alt=""
                    class="about__gallery__photoes__photo"
                />
                <img
                    src="../src/assets/images/game4.png"
                    alt=""
                    class="about__gallery__photoes__photo"
                />
            </div>
            <button class="about__gallery__arrow right">&#8594;</button>
        </div>
        <div class="about__desctiption">
            Разработчики, вдохновившись атмосферой и величием "Ужаса Аркхэма", создали настольную
            игру "Древний Ужас", действие которой происходит в той же вселенной. "Древний Ужас" –
            это уникальная, захватывающая настольная игра в жанре приключений, созданная специально
            для бесстрашных авантюристов, которые готовы бросить вызов судьбе и богам.
        </div>
    </section>
</section>
`,
    selector: '.main-section',
});
