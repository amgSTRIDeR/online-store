import Page from '../core/template/base';

class ErrorPage extends Page {
    constructor(pageID: string) {
        super(pageID);
    }

    render() {
        if (this.container) {
            this.container.innerHTML = `
            <section class="not_found">
            <div class="not_found__content">
                <p class="not_found__content__info">
                    Спасаясь от гоблинов в какой то момент вы поняли что потерялись. Попытка найти выход из
                    этих бесконечных коридоров не увенчалась успехом.
                </p>
                <p class="not_found__content__info">
                    Всюду на стенах вы видите странные надписи 404. Вас не покидет стойкое ощущение что
                    всего этого не существует.
                </p>
                <p class="not_found__content__small_text">
                    Данной страницы не существет, но вы можете использоть свиток телепортации что бы
                    вернуться на главную.
                </p>
                <button class="not_found__content__button">
                    <img
                        src="../src/assets/images/scroll.svg"
                        alt="scroll"
                        class="not_found__content__button__pic"
                        width="60"
                        heigh="60"
                    />
                </button>
            </div>
        </section>`;
        }
        return this.container;
    }
}

export default ErrorPage;
