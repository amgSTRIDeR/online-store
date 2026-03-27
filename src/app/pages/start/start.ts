import { PageComponent, PageConfig } from '../../core/components/page.component';
import { PageModule } from '../../core/modules/page.model';

import { startButton } from './start.button';

class StartPage extends PageComponent {
    constructor(config: PageConfig) {
        super(config);
    }

    loadComponents() {
        const pageModule: PageModule = new PageModule({
            components: [startButton],
        });
        pageModule.render();
    }
}

export const startPage = new StartPage({
    template: `<section class="start">
  <p class="start__preheader">Онлайн магазин настольных игр</p>
  <p class="start__header">Игры на любой вкус</p>
  <button class="start__button">К покупкам</button>
  <div class="start__container">
    <p class="start__note">*Опасность потерять друзей и испортить отношения с родственниками</p>
  </div>
</section>`,
    selector: '.main-section',
});
