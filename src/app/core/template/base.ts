abstract class Page {
    protected container: HTMLDivElement | null;
    constructor(pageID: string) {
        this.container = document.querySelector('.main-section');
        if (this.container) {
            this.container.id = pageID;
        }
    }
    render() {
        return this.container;
    }
}

export default Page;
