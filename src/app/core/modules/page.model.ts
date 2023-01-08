import { PageComponent } from '../components/page.component';
import { ButtonComponent } from '../components/button.component';
import { CardComponent } from '../../pages/store/store.components';
import { DualSliderComponent } from '../../pages/store/store.components';
import { CheckBoxComponent } from '../../pages/store/store.components';

export interface ModuleConfig {
    components: Array<
        | PageComponent
        | ButtonComponent
        | CardComponent
        | DualSliderComponent
        | CheckBoxComponent
        | null
    >;
}

export class PageModule {
    components: Array<
        | PageComponent
        | ButtonComponent
        | CardComponent
        | DualSliderComponent
        | CheckBoxComponent
        | null
    >;
    constructor(config: ModuleConfig) {
        this.components = config.components;
    }
    render() {
        this.initComponents();
    }

    initComponents() {
        this.components.forEach(
            (
                c:
                    | PageComponent
                    | ButtonComponent
                    | CardComponent
                    | DualSliderComponent
                    | CheckBoxComponent
                    | null
            ) => c?.render()
        );
    }
}
