abstract class ComponentButton {
    protected component: HTMLElement | null;

    constructor(className: string) {
        this.component = document.querySelector(className);
    }

    protected push() {}
}

export default ComponentButton;
