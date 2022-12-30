import ComponentButton from '../core/template/components';
import { Render } from '../core/functionality/render';

class ButtonStart extends ComponentButton {
    constructor() {
        super('.start__button');
    }

    push() {
        if (this.component) {
            this.component.addEventListener('click', () => {
                const renderStore = new Render();
                renderStore.renderNewPage('store');
            });
        }
    }
}

export default ButtonStart;
