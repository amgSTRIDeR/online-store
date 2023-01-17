import { GamesCollection } from '../../../public/games-collection';
import { StoreCards } from '../../pages/store/store.cards-block';

export function isContainsSubstring(index: number) {
    if (StoreCards.searchInputValue === '') {
        return true;
    }

    const arrayOfValues: string[] = [];
    let check = false;

    arrayOfValues.push(GamesCollection[index].title_ru);
    arrayOfValues.push(GamesCollection[index].subtittle_ru);
    arrayOfValues.push(GamesCollection[index].description_ru);
    arrayOfValues.push(`${GamesCollection[index].price}`);
    arrayOfValues.push(`${GamesCollection[index].rating}`);
    arrayOfValues.push(`${GamesCollection[index].stock}`);
    arrayOfValues.push(`${GamesCollection[index].GameTime.join(' ')}`);
    arrayOfValues.push(`${GamesCollection[index].age.join(' ')}`);
    arrayOfValues.push(`${GamesCollection[index].gamers.join(' ')}`);
    arrayOfValues.push(GamesCollection[index].brand);
    arrayOfValues.push(`${GamesCollection[index].category_ru.join(' ')}`);

    arrayOfValues.forEach((e) => {
        if (e.toLowerCase().includes(StoreCards.searchInputValue.toLowerCase())) {
            check = true;
        }
    });
    return check;
}
