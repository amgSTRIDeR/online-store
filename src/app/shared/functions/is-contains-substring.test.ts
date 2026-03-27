import { isContainsSubstring } from './is-contains-substring';
import { StoreCards } from '../../pages/store/store.cards-block';
import { GamesCollection } from '../../../public/games-collection';

describe('isContainsSubstring', () => {
    const game = GamesCollection[0];

    beforeEach(() => {
        game.title_ru = 'Monopoly';
        game.subtittle_ru = 'The classic board game';
        game.description_ru = 'A game about get fight with family';
        game.price = 50;
        game.rating = 4;
        game.stock = 10;
        game.GameTime = [120, 240];
        game.age = [8, 99];
        game.gamers = [2, 6];
        game.brand = 'HobbyWorld';
        game.category_ru = ['cooperative', 'strategy'];
        StoreCards.searchInputValue = '';
    });

    test('return true if StoreCards.searchInputValue is an empty string', () => {
        expect(isContainsSubstring(game)).toEqual(true);
    });

    test('return true if the game object contains the search input value in any of its properties', () => {
        StoreCards.searchInputValue = 'monopoly';
        expect(isContainsSubstring(game)).toEqual(true);

        StoreCards.searchInputValue = '50';
        expect(isContainsSubstring(game)).toEqual(true);

        StoreCards.searchInputValue = 'strategy';
        expect(isContainsSubstring(game)).toEqual(true);
    });

    test('return false if the game object does not contain the search input value in any of its properties', () => {
        StoreCards.searchInputValue = 'chess';
        expect(isContainsSubstring(game)).toEqual(false);

        StoreCards.searchInputValue = '100';
        expect(isContainsSubstring(game)).toEqual(false);

        StoreCards.searchInputValue = 'action';
        expect(isContainsSubstring(game)).toEqual(false);
    });

    it('should be case-insensitive when checking for the search input value', () => {
        StoreCards.searchInputValue = 'MONOPOLY';
        expect(isContainsSubstring(game)).toEqual(true);
    });
});
