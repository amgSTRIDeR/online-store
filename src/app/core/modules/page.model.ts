import { PageComponent } from '../components/page.component';

interface ModelConfig {
    component: PageComponent[];
}

export class Page {
    components: PageComponent[];
    constructor(config: ModelConfig) {
        this.components = config.component;
    }
    render() {
        this.initComponents();
    }

    initComponents() {
        this.components.forEach((c: PageComponent) => c.render());
    }
}
