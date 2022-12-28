import ComponentButton from '../core/template/components';
import { render } from '../core/functionality/render';

class ButtonStart extends ComponentButton {
    constructor() {
        super('.start__button');
    }

    push() {
        if (this.component) {
            this.component.addEventListener('click', () => {
                render.renderNewPage('store');
            });
        }
    }
}

export default ButtonStart;
