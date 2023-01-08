export interface ButtonConfig {
    className: string;
    text: string;
    function: () => void;
}
export declare class ButtonComponent {
    className: string;
    text: string;
    function: () => void;
    constructor(config: ButtonConfig);
    render(): void;
    push(button: Element | null): void;
}
//# sourceMappingURL=button.component.d.ts.map