import { StoreCards } from '../../pages/store/store.cards-block';
import { GameObject } from '../interfaces/interfaces';

export function isContainsSubstring(game: GameObject) {
    if (StoreCards.searchInputValue === '') {
        return true;
    }

    const arrayOfValues: string[] = [];
    let check = false;

    arrayOfValues.push(game.title_ru);
    arrayOfValues.push(game.subtittle_ru);
    arrayOfValues.push(game.description_ru);
    arrayOfValues.push(`${game.price}`);
    arrayOfValues.push(`${game.rating}`);
    arrayOfValues.push(`${game.stock}`);
    arrayOfValues.push(`${game.GameTime.join(' ')}`);
    arrayOfValues.push(`${game.age.join(' ')}`);
    arrayOfValues.push(`${game.gamers.join(' ')}`);
    arrayOfValues.push(game.brand);
    arrayOfValues.push(`${game.category_ru.join(' ')}`);

    arrayOfValues.forEach((e) => {
        if (e.toLowerCase().includes(StoreCards.searchInputValue.toLowerCase())) {
            check = true;
        }
    });
    return check;
}
