import { PageComponent } from '../components/page.component';
import { ButtonComponent } from '../components/button.component';
import { CardComponent } from '../../pages/store/store.components';
import { DualSliderComponent } from '../../pages/store/filter.components';
import { CheckBoxComponent } from '../../pages/store/filter.components';

export interface ModuleConfig {
    components: Array<
        | PageComponent
        | ButtonComponent
        | CardComponent
        | DualSliderComponent
        | CheckBoxComponent
    >;
}

export class PageModule {
    components: Array<
        | PageComponent
        | ButtonComponent
        | CardComponent
        | DualSliderComponent
        | CheckBoxComponent
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
            ) => c?.render()
        );
    }
}
