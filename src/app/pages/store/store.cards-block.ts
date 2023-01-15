import { GamesCollection } from '../../../public/gamesCollection';
import { sortParameters } from './sortParameters';
import { changeCardsDirection } from '../../shared/functions/change-cards-direction';
import { isContainsSubstring } from '../../shared/functions/isContainsSubstring';
import { setSliderQuery } from '../../shared/functions/setSliderQuery';

export class StoreCards {
    static direction = 0;
    static sortOrder = 0;
    static currentPageNumber = 1;
    static sortedItemsArray = [...GamesCollection];
    static searchInputValue = '';

    static cardsRender() {
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');
        const goodsSort = document.querySelector('.goods-sort');
        const searchInput = document.querySelector('.goods-search__input');

        StoreCards.sortItems();
        StoreCards.searchItems();
        changeCardsDirection(StoreCards.direction);

        arrowLeft?.addEventListener('click', () => {
            if (StoreCards.currentPageNumber > 1) {
                StoreCards.currentPageNumber -= 1;
                StoreCards.renewSlider();
            }
        });

        arrowRight?.addEventListener('click', () => {
            if (StoreCards.currentPageNumber < StoreCards.pageCounter()) {
                StoreCards.currentPageNumber += 1;
                StoreCards.renewSlider();
            }
        });

        if (goodsSort instanceof HTMLSelectElement) {
            goodsSort.addEventListener('change', () => {
                StoreCards.sortOrder = +goodsSort.value;
                StoreCards.sortItems();
                StoreCards.setQuery();
            });
        }

        if (searchInput instanceof HTMLInputElement) {
            searchInput.addEventListener('input', () => {
                StoreCards.searchInputValue = searchInput.value;
                StoreCards.setQuery();
                StoreCards.searchItems();
            });
        }
    }

    static pageCounter(numberOfProductsPerPage = 6) {
        const cardArray = Array.from(document.querySelectorAll('.card'));
        let visibleProductsCounter = 0;

        cardArray.forEach((e) => {
            if (e instanceof HTMLDivElement) {
                if (e.style.display === 'grid') {
                    visibleProductsCounter += 1;
                }
            }
        });
        return Math.ceil(visibleProductsCounter / numberOfProductsPerPage);
    }

    static scrollsRender() {
        const scrollWrapper = document.querySelector('.scroll');
        if (scrollWrapper instanceof HTMLUListElement) {
            scrollWrapper.innerHTML = '';

            for (let i = 0; i < StoreCards.pageCounter(); i += 1) {
                const scrollItem = document.createElement('li');
                scrollItem.classList.add('scroll__item');

                if (i === StoreCards.currentPageNumber - 1) {
                    scrollItem.classList.add('scroll__item_active');
                }

                const copyCard = scrollItem.cloneNode(true);
                copyCard.addEventListener('click', () => {
                    StoreCards.currentPageNumber = i + 1;
                    StoreCards.renewSlider();
                });
                scrollWrapper.appendChild(copyCard);
            }
        }
    }

    static renewSlider() {
        const goodsView = document.querySelector('.goods-view');
        const cardsElement = document.querySelector('.cards');
        const cardsWrapper = document.querySelector('.cards-wrapper');

        if (goodsView instanceof HTMLSelectElement) {
            goodsView.value = `${StoreCards.direction}`;
        }

        if (cardsElement instanceof HTMLDivElement) {
            if (StoreCards.direction === 0) {
                cardsElement.style.transform = `translateY(0vw)`;
                cardsElement.style.transform = `translateX(${
                    (StoreCards.currentPageNumber - 1) * -72
                }vw)`;
            } else {
                cardsElement.style.transform = `translateX(0vw)`;
                cardsElement.style.transform = `translateY(${
                    (StoreCards.currentPageNumber - 1) * -30
                }vw)`;
            }
            StoreCards.scrollsRender();
            if (cardsWrapper) {
                if (StoreCards.pageCounter() === 0) {
                    cardsWrapper.classList.remove('cards-wrapper_empty');
                    cardsWrapper.classList.add('cards-wrapper_empty');
                } else {
                    cardsWrapper.classList.remove('cards-wrapper_empty');
                }
            }
        }
    }

    static setQuery() {
        let finalLink: string = window.location.href;

        finalLink = setSliderQuery(finalLink, 'sort', StoreCards.sortOrder);
        finalLink = setSliderQuery(finalLink, 'view', StoreCards.direction);
        finalLink = setSliderQuery(finalLink, 'search', StoreCards.searchInputValue);

        window.location.href = finalLink;
    }

    static sortItems() {
        const cardsArray = Array.from(document.querySelectorAll('.card'));
        const goodsSort = document.querySelector('.goods-sort');

        if (goodsSort instanceof HTMLSelectElement) {
            goodsSort.value = `${StoreCards.sortOrder}`;
        }

        if (StoreCards.sortOrder === sortParameters.Default) {
            StoreCards.sortedItemsArray.sort((a, b) => a.id - b.id);
        }

        if (StoreCards.sortOrder === sortParameters.RatingDecrease) {
            StoreCards.sortedItemsArray.sort((a, b) => b.rating - a.rating);
        }

        if (StoreCards.sortOrder === sortParameters.RatingIncrease) {
            StoreCards.sortedItemsArray.sort((a, b) => a.rating - b.rating);
        }

        if (StoreCards.sortOrder === sortParameters.PriceDecrease) {
            StoreCards.sortedItemsArray.sort((a, b) => b.price - a.price);
        }

        if (StoreCards.sortOrder === sortParameters.PriceIncrease) {
            StoreCards.sortedItemsArray.sort((a, b) => a.price - b.price);
        }

        if (StoreCards.sortOrder === sortParameters.NameDecrease) {
            StoreCards.sortedItemsArray.sort(function (a, b) {
                return b.title_ru.localeCompare(a.title_ru, 'cyrillic');
            });
        }

        if (StoreCards.sortOrder === sortParameters.NameIncrease) {
            StoreCards.sortedItemsArray.sort(function (a, b) {
                return a.title_ru.localeCompare(b.title_ru, 'cyrillic');
            });
        }

        if (cardsArray) {
            cardsArray.forEach((e) => {
                if (e instanceof HTMLDivElement) {
                    e.style.order = `${StoreCards.sortedItemsArray.findIndex(
                        (obj) => obj.id === +e.id
                    )}`;
                }
            });
        }
    }

    static searchItems() {
        const searchInput = document.querySelector('.goods-search__input');
        if (searchInput instanceof HTMLInputElement) {
            searchInput.value = `${StoreCards.searchInputValue}`;
        }

        const cardsArray = Array.from(document.querySelectorAll('.card'));

        for (let i = 0; i < GamesCollection.length; i += 1) {
            const el = cardsArray[i];
            if (el instanceof HTMLDivElement) {
                if (isContainsSubstring(i)) {
                    el.style.display = 'grid';
                } else {
                    el.style.display = 'none';
                }
            }
        }
        StoreCards.renewSlider();
        StoreCards.renewCounter();
    }

    static renewCounter() {
        const searchCount = document.querySelector('.goods-search__count');
        const cardsArray = Array.from(document.querySelectorAll('.card'));
        let count = 0;

        if (searchCount instanceof HTMLElement) {
            for (let i = 0; i < cardsArray.length; i++) {
                const computedStyle = window.getComputedStyle(cardsArray[i]);
                if (computedStyle.display === 'grid') {
                    count += 1;
                }
            }
            searchCount.textContent = `${count}`;
        }
    }
}
