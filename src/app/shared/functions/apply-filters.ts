import { categoryBox, playersSlider, priceSlider, producerBox } from "../../pages/store/filter.components";
import { StoreCards } from "../../pages/store/store.cards-block";

export function applyFilters(listOfFilters: string[]) {
  for (const filter of listOfFilters) {
    const name = filter.split('=')[0];
    const value = filter.split('=')[1];

    switch (name) {
      case ('price'):
        priceSlider.changeValues(value.split('↕')[0], value.split('↕')[1]);
        break;
      case ('gamers'):
        playersSlider.changeValues(value.split('↕')[0], value.split('↕')[1]);
        break;
      case ('category'):
        categoryBox.changeValues(value.split('↕'));
        break;
      case ('brand'):
        producerBox.changeValues(value.split('↕'));
        break;
      case ('sort'):
        StoreCards.sortOrder = +filter.split('=')[1];
        break;
      case ('view'):
        StoreCards.direction = +filter.split('=')[1];
        break;
      case ('search'):
        StoreCards.searchInputValue = filter.split('=')[1];
        break;
    }
  }
}