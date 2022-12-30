export interface ButtonConfig {
    className: string;
    text: string;
    function: Function;
}

export class ButtonComponent {
    className: string;
    text: string;
    function: Function;
    constructor(config: ButtonConfig) {
        this.className = config.className;
        this.text = config.text;
        this.function = config.function;
    }

    render() {
        const button = document.querySelector(this.className);
        this.push(button);
    }

    push(button: Element | null) {
        if (button) {
            button.addEventListener('click', () => {
                this.function();
            });
        }
    }
}
