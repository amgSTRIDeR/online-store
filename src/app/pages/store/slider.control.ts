import { GamesCollection } from '../../../public/gamesCollection';
import { sortParameters } from '../../shared/enums/sortParameters';
import { changeCardsDirection } from '../../shared/functions/cahge-cards-direction';
import { isContainsSubstring } from '../../shared/functions/isContainsSubstring';
import { setSliderQuery } from '../../shared/functions/setSliderQuery';

export class StoreSlider {
    static direction = 0;
    static sortOrder = 0;
    static currentPageNumber = 1;
    static sortedItemsArray = [...GamesCollection];
    static searchInputValue = '';

    static sliderRender() {
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');
        const goodsSort = document.querySelector('.goods-sort');
        const searchInput = document.querySelector('.goods-search__input');

        StoreSlider.sortItems();
        StoreSlider.searchItems();
        changeCardsDirection(StoreSlider.direction);

        arrowLeft?.addEventListener('click', () => {
            if (StoreSlider.currentPageNumber > 1) {
                StoreSlider.currentPageNumber -= 1;
                StoreSlider.renewSlider();
            }
        });

        arrowRight?.addEventListener('click', () => {
            if (StoreSlider.currentPageNumber < StoreSlider.pageCounter()) {
                StoreSlider.currentPageNumber += 1;
                StoreSlider.renewSlider();
            }
        });

        if (goodsSort instanceof HTMLSelectElement) {
            goodsSort.addEventListener('change', () => {
                StoreSlider.sortOrder = +goodsSort.value;
                StoreSlider.sortItems();
                StoreSlider.setQuery();
            });
        }

        if (searchInput instanceof HTMLInputElement) {
            searchInput.addEventListener('input', () => {
                StoreSlider.searchInputValue = searchInput.value;
                StoreSlider.setQuery();
                if (searchInput.value) {
                  StoreSlider.searchItems();
                }
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

            for (let i = 0; i < StoreSlider.pageCounter(); i += 1) {
                const scrollItem = document.createElement('li');
                scrollItem.classList.add('scroll__item');

                if (i === StoreSlider.currentPageNumber - 1) {
                    scrollItem.classList.add('scroll__item_active');
                }

                const copyCard = scrollItem.cloneNode(true);
                copyCard.addEventListener('click', () => {
                    StoreSlider.currentPageNumber = i + 1;
                    StoreSlider.renewSlider();
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
            goodsView.value = `${StoreSlider.direction}`;
        }

        if (cardsElement instanceof HTMLDivElement) {
            if (StoreSlider.direction === 0) {
                cardsElement.style.transform = `translateY(0vw)`;
                cardsElement.style.transform = `translateX(${
                    (StoreSlider.currentPageNumber - 1) * -72
                }vw)`;
            } else {
                cardsElement.style.transform = `translateX(0vw)`;
                cardsElement.style.transform = `translateY(${
                    (StoreSlider.currentPageNumber - 1) * -30
                }vw)`;
            }
            StoreSlider.scrollsRender();
            if (cardsWrapper) {
                if (StoreSlider.pageCounter() === 0) {
                    cardsWrapper.classList.remove('cards-wrapper_empty');
                    cardsWrapper.classList.add('cards-wrapper_empty');
                } else {
                    cardsWrapper.classList.remove('cards-wrapper_empty');
                }
            }
        }
    }
    //вот
    static setQuery() {
        let finalLink: string = window.location.href;

        finalLink = setSliderQuery(finalLink, 'sort');
        finalLink = setSliderQuery(finalLink, 'view');
        finalLink = setSliderQuery(finalLink, 'search');

        if (StoreSlider.sortOrder !== 0) {
            if (finalLink.includes('?')) {
                finalLink += '&';
            } else {
                finalLink += '?';
            }
            finalLink += 'sort=';

            finalLink += StoreSlider.sortOrder;
        }

        if (StoreSlider.direction !== 0) {
            if (finalLink.includes('?')) {
                finalLink += '&';
            } else {
                finalLink += '?';
            }
            finalLink += 'view=';

            finalLink += StoreSlider.direction;
        }

        if (StoreSlider.searchInputValue) {
            if (finalLink.includes('?')) {
                finalLink += '&';
            } else {
                finalLink += '?';
            }
            finalLink += 'search=';

            finalLink += StoreSlider.searchInputValue;
        }

        window.location.href = finalLink;
    }

    static sortItems() {
        const cardsArray = Array.from(document.querySelectorAll('.card'));
        const goodsSort = document.querySelector('.goods-sort');

        if (goodsSort instanceof HTMLSelectElement) {
            goodsSort.value = `${StoreSlider.sortOrder}`;
        }

        if (StoreSlider.sortOrder === sortParameters.Default) {
            StoreSlider.sortedItemsArray.sort((a, b) => a.id - b.id);
        }

        if (StoreSlider.sortOrder === sortParameters.RatingDecrease) {
            StoreSlider.sortedItemsArray.sort((a, b) => b.rating - a.rating);
        }

        if (StoreSlider.sortOrder === sortParameters.RatingIncrease) {
            StoreSlider.sortedItemsArray.sort((a, b) => a.rating - b.rating);
        }

        if (StoreSlider.sortOrder === sortParameters.PriceDecrease) {
            StoreSlider.sortedItemsArray.sort((a, b) => b.price - a.price);
        }

        if (StoreSlider.sortOrder === sortParameters.PriceIncrease) {
            StoreSlider.sortedItemsArray.sort((a, b) => a.price - b.price);
        }

        if (StoreSlider.sortOrder === sortParameters.NameDecrease) {
            StoreSlider.sortedItemsArray.sort(function (a, b) {
                return b.title_ru.localeCompare(a.title_ru, 'cyrillic');
            });
        }

        if (StoreSlider.sortOrder === sortParameters.NameIncrease) {
            StoreSlider.sortedItemsArray.sort(function (a, b) {
                return a.title_ru.localeCompare(b.title_ru, 'cyrillic');
            });
        }

        if (cardsArray) {
            cardsArray.forEach((e) => {
                if (e instanceof HTMLDivElement) {
                    e.style.order = `${StoreSlider.sortedItemsArray.findIndex(
                        (obj) => obj.id === +e.id
                    )}`;
                }
            });
        }
    }

    static searchItems() {
        const searchInput = document.querySelector('.goods-search__input');

        if (searchInput instanceof HTMLInputElement) {
            searchInput.value = `${StoreSlider.searchInputValue}`;
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

        StoreSlider.renewSlider();
    }
}
