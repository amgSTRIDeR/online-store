import Page from '../core/template/base';
import ButtonStart from '../components/start-route';

class StartPage extends Page {
    constructor(pageID: string) {
        super(pageID);
    }

    render() {
        if (this.container) {
            this.container.innerHTML = `
        <section class="start">
        <p class="start__preheader">Онлайн магазин настольных игр</p>
        <p class="start__header">Игры на любой вкус</p>
        <button class="start__button">К покупкам</button>
        <div class="start__container">
          <p class="start__note">*Опасность потерять друзей и испортить отношения с родственниками</p>
        </div>
      </section>`;
        }
        const buttonStart = new ButtonStart();
        buttonStart.push();
        return this.container;
    }
}

export default StartPage;
