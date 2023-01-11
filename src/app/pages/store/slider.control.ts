import { GamesCollection } from '../../../public/gamesCollection';
import { sortParameters } from '../../shared/enums/sortParameters';

export class StoreSlider {
    static direction = 'horizontal';
    static currentPageNumber = 1;
    static sortedItemsArray = [...GamesCollection];

    static sliderRender() {
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');
        const goodsSort = document.querySelector('.goods-sort');

        StoreSlider.renewSlider();
        StoreSlider.scrollsRender();

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
            StoreSlider.sortItems(+goodsSort.value);
          })
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
        const cardsWrapper = document.querySelector('.cards');
        if (cardsWrapper instanceof HTMLDivElement) {
            if (StoreSlider.direction === 'horizontal') {
                cardsWrapper.style.transform = `translateY(0vw)`;
                cardsWrapper.style.transform = `translateX(${
                    (StoreSlider.currentPageNumber - 1) * -72
                }vw)`;
            } else {
                cardsWrapper.style.transform = `translateX(0vw)`;
                cardsWrapper.style.transform = `translateY(${
                    (StoreSlider.currentPageNumber - 1) * -30
                }vw)`;
            }
            StoreSlider.scrollsRender();
        }
    }

    static sortItems(sortValue: number) {
      const cardsArray = Array.from(document.querySelectorAll('.card'));

        if (sortValue === sortParameters.Default) {
            StoreSlider.sortedItemsArray.sort((a, b) => a.id - b.id);
        }

        if (sortValue === sortParameters.RatingDecrease) {
            StoreSlider.sortedItemsArray.sort((a, b) => b.rating - a.rating);
        }

        if (sortValue === sortParameters.RatingIncrease) {
            StoreSlider.sortedItemsArray.sort((a, b) => a.rating - b.rating);
        }

        if (sortValue === sortParameters.PriceDecrease) {
            StoreSlider.sortedItemsArray.sort((a, b) => b.price - a.price);
        }

        if (sortValue === sortParameters.PriceIncrease) {
            StoreSlider.sortedItemsArray.sort((a, b) => a.price - b.price);
        }
        
        if (sortValue === sortParameters.NameDecrease) {
          StoreSlider.sortedItemsArray.sort(function(a, b) {
            return b.title_ru.localeCompare(a.title_ru, 'cyrillic');
          });
        }
        
        if (sortValue === sortParameters.NameIncrease) {
            StoreSlider.sortedItemsArray.sort(function(a, b) {
              return a.title_ru.localeCompare(b.title_ru, 'cyrillic');
            });
        }

        if (cardsArray) {
          cardsArray.forEach((e) => {
            if (e instanceof HTMLDivElement) {
              e.style.order = `${StoreSlider.sortedItemsArray.findIndex(obj => obj.id === +e.id)}`
            }
          })
        }

    }
}
