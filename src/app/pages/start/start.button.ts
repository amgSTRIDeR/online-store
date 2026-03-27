import { ButtonComponent } from '../../core/components/button.component';
import { Render } from '../../core/functionality/render';

export const startButton = new ButtonComponent({
    className: '.start__button',
    text: 'К покупкам',
    function: (): void => {
        Render.renderNewPage('store');
    },
});
