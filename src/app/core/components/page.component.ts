export interface PageConfig {
    template: string;
    selector: string;
}

export class PageComponent {
    template: string;
    selector: string;
    constructor(config: PageConfig) {
        this.template = config.template;
        this.selector = config.selector;
    }

    render() {
        const element = document.querySelector(this.selector);
        if (element) {
            element.innerHTML = this.template;
        } else {
            throw new Error(`Component with selector ${this.selector} wasn't found`);
        }
    }

    loadComponents() {}
}
