import { isContainsSubstring } from "./is-contains-substring";
import { StoreCards } from "../../pages/store/store.cards-block";
import { GamesCollection } from "../../../public/games-collection";

describe('isContainsSubstring', () => {
  it('should return false if StoreCards.searchInputValue is not found in any of the game properties', () => {
    StoreCards.searchInputValue = 'xyz';
    const game = GamesCollection[1];
    const result = isContainsSubstring(game);
    expect(result).toBe(false);
});
})
