
export class StoreSlider {
  static direction = 'horizontal';
  static currentPageNumber = 1;

  static sliderRender() {
    const cardsWrapper = document.querySelector('.cards');
    // const cardArray = Array.from(document.querySelectorAll('.card'));
    // const scrollWrapper = document.querySelector('.scroll');
    // const scrollsArray = Array.from(document.querySelectorAll('.scroll__item'));
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    if (cardsWrapper instanceof HTMLDivElement) {
      cardsWrapper.style.transform = `translateX(${(this.currentPageNumber - 1) * -72}vw)`
    }

    arrowLeft?.addEventListener('click', () => {
      if (this.currentPageNumber > 1) {
        if (cardsWrapper instanceof HTMLDivElement) {
          this.currentPageNumber -= 1;
          cardsWrapper.style.transform = `translateX(${(this.currentPageNumber - 1) * -72}vw)`
        }
      }
    })

    arrowRight?.addEventListener('click', () => {
      if (this.currentPageNumber < this.pageCounter()) {
        if (cardsWrapper instanceof HTMLDivElement) {
          this.currentPageNumber += 1;
          cardsWrapper.style.transform = `translateX(${(this.currentPageNumber - 1) * -72}vw)`
        }
      }
    })
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


}
