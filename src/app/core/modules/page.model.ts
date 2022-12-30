import { PageComponent } from '../components/page.component';
import { ButtonComponent } from '../components/button.component';
import { CardComponent } from '../../pages/store/store.components';

export interface ModuleConfig {
    components: Array<PageComponent | ButtonComponent | CardComponent>;
}

export class PageModule {
    components: Array<PageComponent | ButtonComponent | CardComponent>;
    constructor(config: ModuleConfig) {
        this.components = config.components;
    }
    render() {
        this.initComponents();
    }

    initComponents() {
        this.components.forEach((c: PageComponent | ButtonComponent | CardComponent) => c.render());
    }
}
