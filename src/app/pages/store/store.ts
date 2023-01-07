import { PageComponent, PageConfig } from '../../core/components/page.component';
import { PageModule, ModuleConfig } from '../../core/modules/page.model';
import { cardList } from './store.components';
import { priceSlider, playersSlider, categoryBox, producerBox } from './store.components';

class StorePage extends PageComponent {
    constructor(config: PageConfig) {
        super(config);
    }
    loadFilters() {
        if (localStorage.getItem('hash')) {
            const url: string | null = localStorage.getItem('hash');
            if (url) {
                const listOfFilters = decodeURI(url).slice(6).split('&');

                for (let filter of listOfFilters) {
                    const values: string[] = filter.split('=')[1].split('↕');
                    if (filter.split('=')[0] === 'price') {
                        priceSlider.changeValues(values[0], values[1]);
                    } else if (filter.split('=')[0] === 'gamers') {
                        playersSlider.changeValues(values[0], values[1]);
                    } else if (filter.split('=')[0] === 'category') {
                        categoryBox.changeValues(values);
                    } else if (filter.split('=')[0] === 'brand') {
                        producerBox.changeValues(values);
                    }
                }
            }
        }
    }

    loadComponents() {
        this.loadFilters();
        const pageModule: PageModule = new PageModule({
            components: [priceSlider, playersSlider, producerBox, categoryBox, ...cardList],
        });
        pageModule.render();
    }
}

export const storePage = new StorePage({
    template: `<section class="start">
    <section class="store store_horizontal">
    <select class="goods-sort" id="sort" name="sort">
      <option class="goods-sort__item" value="0">
        по популярности &#x2198;
      </option>
      <option class="goods-sort__item" value="1">
        по популярности &#x2197;
      </option>
      <option class="goods-sort__item" value="2">
        по цене &#x2198;
      </option>
      <option class="goods-sort__item" value="3">
        по цене &#x2197;
      </option>
      <option class="goods-sort__item" value="4">
        по названию &#x2198;
      </option>
      <option class="goods-sort__item" value="5">
        по названию &#x2197;
      </option>
    </select>
    <div class="goods-search">
      <input class="goods-search__input" type="text" name="search" id="search" placeholder="Поиск">
      <div class="goods-search__reset"></div>
      <p class="goods-search__count">23</p>
    </div>
    <select class="goods-view" id="sort" name="sort">
      <option class="goods-view__item goods-view__item_active" value="0">
        горизонтальный
      </option>
      <option class="goods-view__item" value="1">
        вертикальный
      </option>
    </select>
    <svg class="arrow-left" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531"
      style="enable-background:new 0 0 444.531 444.531;" xml:space="preserve">
      <g>
        <path d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
  l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
  c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
  s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
  L213.13,222.409z" />
    </svg>
    <div class="cards-wrapper">
    <div class="cards">
        
       
        
      </div>
    </div>
    <svg class="arrow-right" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531"
      style="enable-background:new 0 0 444.531 444.531;" xml:space="preserve">
      <g>
        <path d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
     l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
     c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
     s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
     L213.13,222.409z" />
    </svg>
    <ul class="scroll">
      <li class="scroll__item"></li>
      <li class="scroll__item scroll__item_active"></li>
      <li class="scroll__item"></li>
      <li class="scroll__item"></li>
      <li class="scroll__item"></li>
    </ul>
    <div class="sets-wrapper">
      <div class="sets sets-category">Категория
        <ul class="sets__list">
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Игры для компании" id="">Игры для компании</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Игры для взрослых" id="">Игры для взрослых</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Карточные игры" id="">Карточные игры</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Игры в дорогу" id="">Игры в дорогу</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Для двоих" id="">Для двоих</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Семейные" id="">Семейные</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Стратегические игры" id="">Стратегические игры</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Кооперативные игры" id="">Кооперативные игры</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Полукооперативные игры" id="">Полукооперативные игры</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Приключенческие игры" id="">Приключенческие игры</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Детективные игры" id="">Детективные игры</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Мафия" id="">Мафия</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Логические игры" id="">Логические игры</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Для одного" id="">Для одного</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Хардкорные игры" id="">Хардкорные игры</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Книги-игры" id="">Книги-игры</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Квесты" id="">Квесты</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Дуэльные" id="">Дуэльные</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Детские игры" id="">Детские игры</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Экономические" id="">Экономические</li>

        </ul>
      </div>
      <div class="sets sets-maker">Производитель
        <ul class="sets__list">
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Hobby World" id=""> Hobby world игры</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Celaeno Books" id="">Celaeno Books</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Fantasy Flight Games" id="">Fantasy Flight Games</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Mandoo Games" id="">Mandoo Games</li>
        <li class="sets__list-item"><input class= "sets__checkbox" type="checkbox" name="Asmodee" id="">Asmodee</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Lucky Duck Games" id="">Lucky Duck Games</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Экономикус" id="">Экономикус</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="New Making Studio" id="">New Making Studio</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Magellan" id="">Magellan</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Экивоки" id="">Экивоки</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Стиль Жизни" id="">Стиль Жизни</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Blue Orange Games" id="">Blue Orange Games</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="GaGa Games" id="">GaGa Games</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="IGames" id="">IGames</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Lavka Games" id="">Lavka Games</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="dV Giochi" id="">dV Giochi</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Правильные Игры" id="">Правильные Игры</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Horrible Games" id="">Horrible Games</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Эврикус" id="">Эврикус</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Фабрика игр" id="">Фабрика игр</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Piatnik" id="">Piatnik</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="CMON" id="">CMON</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Paizo" id="">Paizo</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Greater Than Games" id="">Greater Than Games</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Portal Games" id="">Portal Games</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Rebel" id="">Rebel</li>
        <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="Makaka Editions" id="">Makaka Editions</li>
        </ul>
      </div>
      <div class="silder-wrapper">
        <div class="price-slider__wrapper">
          Цена
          <div class="price-slider__sliders-control">
            <input class="price-slider__from-slider" type="range" value="0" min="0" max="15000"/>
            <input class="price-slider__to-slider" type="range" value="15000" min="0" max="15000"/>
          </div>
          <div class="price-slider__min-max">
            <div class="price-slider__min">От
              <input class="price-slider__min__input" type="number" value="0" min="0" max="15000">
            </div>
            <div class="price-slider__max">до 
              <input class="price-slider__max__input" type="number" value="15000" min="0" max="15000">
            </div>
          </div>
      </div>


      <div class="players-number__wrapper">
      Количество игроков
          <div class="players-number__sliders-control">
            <input class="players-number__from-slider" type="range" value="1" min="1" max="99"/>
            <input class="players-number__to-slider" type="range" value="99" min="1" max="99"/>
          </div>
          <div class="players-number__min-max">
            <div class="players-number__min">От
              <input class="players-number__min__input" type="number" value="1" name="" id="" min="1" max="99">
            </div>
            <div class="players-number__max">до 
            <input class="players-number__max__input" type="number" value="99" name="" id="" min="1" max="99">
            </div>
          </div>
      </div>
    </div>



    <div class='reboot_filter__wrapper'>
      <div class="sale__wrapper">
        <input class="sets__checkbox" type="checkbox" name="" id="">Акция
      </div>
      <div class="stock__wrapper">
        <input class="sets__checkbox" type="checkbox" name="" id="">В наличии
      </div>
      <button class="filter__button">Сбросить фильтр</button>
      <button class="copy__button">Скопировать ссылку</button>
    </div>
  </section>`,
    selector: '.main-section',
});
