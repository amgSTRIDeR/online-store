import { GamesCollection } from '../../../public/gamesCollection';
import { StoreSlider } from '../../pages/store/slider.control';

export function isContainsSubstring(index: number) {
    if (StoreSlider.searchInputValue === '') {
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
        if (e.toLowerCase().includes(StoreSlider.searchInputValue.toLowerCase())) {
            check = true;
        }
    });
    return check;
}
