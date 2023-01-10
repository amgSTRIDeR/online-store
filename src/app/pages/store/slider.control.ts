export class StoreSlider {
    static direction = 'horizontal';
    static currentPageNumber = 1;

    static sliderRender() {
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');

        StoreSlider.moveSlider();
        StoreSlider.scrollsRender();

        arrowLeft?.addEventListener('click', () => {
            if (StoreSlider.currentPageNumber > 1) {
                StoreSlider.currentPageNumber -= 1;
                StoreSlider.moveSlider();
            }
        });

        arrowRight?.addEventListener('click', () => {
            if (StoreSlider.currentPageNumber < StoreSlider.pageCounter()) {
                StoreSlider.currentPageNumber += 1;
                StoreSlider.moveSlider();
            }
        });
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
                    StoreSlider.moveSlider();
                });
                scrollWrapper.appendChild(copyCard);
            }
        }
    }

    static moveSlider() {
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

}
