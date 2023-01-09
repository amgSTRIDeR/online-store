import { PageComponent } from '../components/page.component';
import { ButtonComponent } from '../components/button.component';
import { CardComponent } from '../../pages/store/store.components';
import { DualSliderComponent } from '../../pages/store/filter.components';
import { CheckBoxComponent } from '../../pages/store/filter.components';
export interface ModuleConfig {
    components: Array<PageComponent | ButtonComponent | CardComponent | DualSliderComponent | CheckBoxComponent | null>;
}
export declare class PageModule {
    components: Array<PageComponent | ButtonComponent | CardComponent | DualSliderComponent | CheckBoxComponent | null>;
    constructor(config: ModuleConfig);
    render(): void;
    initComponents(): void;
}
//# sourceMappingURL=page.model.d.ts.map