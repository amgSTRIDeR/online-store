import { PageComponent } from '../components/page.component';
import { ButtonComponent } from '../components/button.component';

export interface ModuleConfig {
    components: Array<PageComponent | ButtonComponent>;
}

export class PageModule {
    components: Array<PageComponent | ButtonComponent>;
    constructor(config: ModuleConfig) {
        this.components = config.components;
    }
    render() {
        this.initComponents();
    }

    initComponents() {
        this.components.forEach((c: PageComponent | ButtonComponent) => c.render());
    }
}
