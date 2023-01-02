import { PageComponent } from '../components/page.component';
import { ButtonComponent } from '../components/button.component';
import { CardComponent } from '../../pages/store/store.components';
import { DualSliderComponent } from '../../pages/store/store.filters';

export interface ModuleConfig {
    components: Array<PageComponent | ButtonComponent | CardComponent | DualSliderComponent>;
}

export class PageModule {
    components: Array<PageComponent | ButtonComponent | CardComponent | DualSliderComponent>;
    constructor(config: ModuleConfig) {
        this.components = config.components;
    }
    render() {
        this.initComponents();
    }

    initComponents() {
        this.components.forEach(
            (c: PageComponent | ButtonComponent | CardComponent | DualSliderComponent) => c.render()
        );
    }
}
