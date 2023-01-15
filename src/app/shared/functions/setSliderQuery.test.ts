import { setSliderQuery } from './setSliderQuery';

describe('Find given param in query and add param if given', () => {
    test('update the query parameter if it already exists', () => {
        const str = '#store?sort=2&search=1&view=1';
        const text = 'view';
        const param = 3;
        const result = setSliderQuery(str, text, param);
        expect(result).toBe('#store?sort=2&search=1&view=3');
    });

    test('remove the query parameter if the value is 0', () => {
        const str = '#store?sort=2&view=1&search=12';
        const text = 'search';
        const param = 0;
        const result = setSliderQuery(str, text, param);
        expect(result).toBe('#store?sort=2&view=1');
    });

    test('add or update the query parameter with the given value', () => {
        const str = '#store?view=1&search=12';
        const text = 'sort';
        const param = 5;
        const result = setSliderQuery(str, text, param);
        expect(result).toBe('#store?view=1&search=12&sort=5');
    });
});
