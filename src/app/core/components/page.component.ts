export interface ConfigComp {
    template: string;
    selector: string;
}

export class PageComponent {
    template: string;
    selector: string;
    constructor(config: ConfigComp) {
        this.template = config.template;
        this.selector = config.selector;
    }

    render() {
        console.log(this.selector);
        const element = document.querySelector(this.selector);
        console.log(document.querySelector(this.selector));
        if (element) {
            element.innerHTML = this.template;
        }
    }
}
