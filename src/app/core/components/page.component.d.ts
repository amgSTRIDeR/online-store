export interface PageConfig {
    template: string;
    selector: string;
}
export declare class PageComponent {
    template: string;
    selector: string;
    constructor(config: PageConfig);
    render(): void;
    loadComponents(): void;
}
//# sourceMappingURL=page.component.d.ts.map