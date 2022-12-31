export class CartPage {
    static pageRender(query: string) {
      let pageNumber = 1;
      let itemsLimit = 3;
      
      console.log(query)
      //page=2&limit=4
        const mainSection = document.querySelector('.main-section');
        const basketHead = document.createElement('section');
        const basketHeadInfoHeader = document.createElement('h2');
        const basketHeadInfoPageControl = document.createElement('div');
        const basketHeadInfoPageControlPages = document.createElement('p');
        const arrowLeft = document.createElement('button');
        const arrowRight = document.createElement('button');
        const basketHeadInfoPageControlPagesProdAmount = document.createElement('p');
        const arrowLeftProdAmount = document.createElement('button');
        const arrowRightProdAmount = document.createElement('button');

        basketHead.classList.add('basket__head_info');
        basketHeadInfoHeader.classList.add('basket__head_info__header');
        basketHeadInfoPageControl.classList.add('basket__head_info__page_control');
        basketHeadInfoPageControlPages.classList.add('basket__head_info__page_control__pages');
        arrowLeft.classList.add('arrow__left');
        arrowLeft.classList.add('small_button');
        arrowRight.classList.add('arrow__right');
        arrowRight.classList.add('small_button');
        basketHeadInfoPageControlPagesProdAmount.classList.add(
            'basket__head_info__page_control__prod_amount'
        );
        arrowLeftProdAmount.classList.add('arrow__left');
        arrowLeftProdAmount.classList.add('small_button');
        arrowRightProdAmount.classList.add('arrow__right');
        arrowRightProdAmount.classList.add('small_button');

        basketHeadInfoHeader.textContent = 'Корзина';
        basketHeadInfoPageControlPages.textContent = 'Страница';
        arrowLeft.innerHTML = '&lt';
        arrowRight.innerHTML = '&gt;';
        basketHeadInfoPageControlPagesProdAmount.textContent = 'Количество товаров на странице';
        arrowLeftProdAmount.innerHTML = '&lt;';
        arrowRightProdAmount.innerHTML = '&gt;';

        basketHeadInfoPageControlPagesProdAmount.appendChild(arrowLeftProdAmount);
        basketHeadInfoPageControlPagesProdAmount.insertAdjacentText('beforeend', '1/2');
        basketHeadInfoPageControlPagesProdAmount.appendChild(arrowRightProdAmount);
        basketHeadInfoPageControlPages.appendChild(arrowLeft);
        basketHeadInfoPageControlPages.insertAdjacentText('beforeend', '3');
        basketHeadInfoPageControlPages.appendChild(arrowRight);
        basketHeadInfoPageControl.appendChild(basketHeadInfoPageControlPages);
        basketHeadInfoPageControl.appendChild(basketHeadInfoPageControlPagesProdAmount);
        basketHeadInfoPageControl.appendChild(basketHeadInfoPageControlPages);
        basketHeadInfoPageControl.appendChild(basketHeadInfoPageControlPagesProdAmount);
        basketHead.appendChild(basketHeadInfoHeader);
        basketHead.appendChild(basketHeadInfoPageControl);

        if (mainSection) {
            mainSection.appendChild(basketHead);
        }
    }
}
