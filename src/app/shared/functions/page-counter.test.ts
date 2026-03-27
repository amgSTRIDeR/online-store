/**
 * @jest-environment jsdom
 */

import { pageCounter } from './page-counter';

describe('pageCounter', () => {
    const card1 = document.createElement('div');
    card1.style.display = 'grid';
    card1.classList.add('card');
    const card2 = document.createElement('div');
    card2.style.display = 'grid';
    card2.classList.add('card');
    const card3 = document.createElement('div');
    card3.style.display = 'none';
    card3.classList.add('card');
    const card4 = document.createElement('div');
    card4.style.display = 'grid';
    card4.classList.add('card');
    const card5 = document.createElement('div');
    card5.style.display = 'grid';
    card5.classList.add('card');
    const card6 = document.createElement('div');
    card6.style.display = 'none';
    card6.classList.add('card');
    const card7 = document.createElement('div');
    card7.style.display = 'grid';
    card7.classList.add('card');
    const card8 = document.createElement('div');
    card8.style.display = 'grid';
    card8.classList.add('card');
    const card9 = document.createElement('div');
    card9.style.display = 'grid';
    card9.classList.add('card');
    const card10 = document.createElement('div');
    card10.style.display = 'grid';
    card10.classList.add('card');
    const card11 = document.createElement('section');
    card10.style.display = 'grid';
    card10.classList.add('card');
    const card12 = document.createElement('artiicle');
    card10.style.display = 'grid';
    card10.classList.add('card');

    beforeAll(() => {
        document.body.appendChild(card1);
        document.body.appendChild(card2);
        document.body.appendChild(card3);
        document.body.appendChild(card4);
        document.body.appendChild(card5);
        document.body.appendChild(card6);
        document.body.appendChild(card7);
        document.body.appendChild(card8);
        document.body.appendChild(card9);
        document.body.appendChild(card10);
    });

    afterAll(() => {
        document.body.removeChild(card1);
        document.body.removeChild(card2);
        document.body.removeChild(card3);
        document.body.removeChild(card4);
        document.body.removeChild(card5);
        document.body.removeChild(card6);
        document.body.removeChild(card7);
        document.body.removeChild(card8);
        document.body.removeChild(card9);
        document.body.removeChild(card10);
    });

    test('return the correct number of pages when the number of products per page is 6', () => {
        expect(pageCounter()).toEqual(2);
    });

    test('return the correct number of pages when the number of products per page is not 6', () => {
        expect(pageCounter(3)).toEqual(3);
        expect(pageCounter(7)).toEqual(2);
        expect(pageCounter(12)).toEqual(1);
    });

    it('should not include elements that are not HTMLDivElements in the visible product count', () => {
        document.body.appendChild(card11);
        document.body.appendChild(card12);

        expect(pageCounter(3)).toEqual(3);

        document.body.removeChild(card11);
        document.body.removeChild(card12);
    });
});
