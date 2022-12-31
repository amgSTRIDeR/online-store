import { PageComponent, PageConfig } from '../../core/components/page.component';
import { PageModule, ModuleConfig } from '../../core/modules/page.model';
import cardList from './store.components';

class StorePage extends PageComponent {
    constructor(config: PageConfig) {
        super(config);
    }

    loadComponents() {
        const pageModule: PageModule = new PageModule({
            components: [...cardList],
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
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="" id=""> Вечериночные игры</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="" id="">Викторины</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="" id="">Детективные</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="" id="">Карточные</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="" id="">Командные</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="" id="">Квесты</li>
        </ul>
      </div>
      <div class="sets sets-maker">Производитель
        <ul class="sets__list">
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="" id=""> Hobby world игры</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="" id="">ARES</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="" id="">Devir</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="" id="">Blue Cocker</li>
          <li class="sets__list-item"><input class= "sets__checkbox" type="checkbox" name="" id="">Do Joy</li>
          <li class="sets__list-item"><input class="sets__checkbox" type="checkbox" name="" id="">Dude Games</li>
        </ul>
      </div>
      <div class="price-slider__wrapper">
        Цена
        <div class="price-slider__sliders-control">
          <input class="price-slider__from-slider" type="range" value="10" min="0" max="15000"/>
          <input class="price-slider__to-slider" type="range" value="780" min="0" max="15000"/>
        </div>
        <div class="price-slider__min-max">
          <div class="price-slider__min">От
          <input class="price-slider__min__input" type="number" name="" id="" min="0" max="15000"></div>
          <div class="price-slider__max">до 
          <input class="price-slider__max__input" type="number" name="" id="" min="0" max="15000">
        </div>
        </div>
       

      </div>
      <div class="players-number">
        Количество игроков
        <div class="players-number__inputs">
          <input type="radio" name="players" id="any">
          <input type="radio" name="players" id="any">
          <input type="radio" name="players" id="any">
          <input type="radio" name="players" id="any">
          <input type="radio" name="players" id="any">
          <input type="radio" name="players" id="any">
          <input type="radio" name="players" id="any">
        </div>
      </div>
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
