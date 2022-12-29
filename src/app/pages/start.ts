import { PageComponent } from '../core/components/page.component';

export const startPage = new PageComponent({
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
