import { ButtonComponent } from '../../core/components/button.component';
import { priceSlider, playersSlider, categoryBox, producerBox } from './filter.components';
import { StoreCards } from './store.cards-block';

export const copyButton = new ButtonComponent({
    className: '.copy__button',
    text: 'Скопировать ссылку',
    function: () => {
        navigator.clipboard.writeText(window.location.href).catch((err: string | undefined) => {
            throw new Error(err);
        });
        const copyButtonElement = document.querySelector('.copy__button');
        if (copyButtonElement instanceof HTMLButtonElement) {
            copyButtonElement.textContent = 'Ссылка скопирована';
        }
    },
});

export const resetButton = new ButtonComponent({
    className: '.filter__button',
    text: 'Сбросить фильтр',
    function: () => {
        priceSlider.changeValues('0', '15000');
        playersSlider.changeValues('1', '99');
        categoryBox.changeValues([]);
        producerBox.changeValues([]);
        StoreCards.sortItems(0);
        window.location.href = window.location.protocol + '//' + window.location.host + '/#store';
    },
});
