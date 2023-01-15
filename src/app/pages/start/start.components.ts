import { ButtonComponent, ButtonConfig } from '../../core/components/button.component';
import { Render } from '../../core/functionality/render';

class StartButton extends ButtonComponent {
    constructor(config: ButtonConfig) {
        super(config);
    }
}

export const startButton = new StartButton({
    className: '.start__button',
    text: 'К покупкам',
    function: (): void => {
        Render.renderNewPage('store');
    },
});
