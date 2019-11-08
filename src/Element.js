import Base from "./Base";

class Element extends Base {

    /**
     * Creates an instance of Element.
     * @param {string} selector
     * @param {'single' | 'all'} [type='single']
     * @memberof Element
     */
    constructor(selector, type = 'single') {
        super(Element.name);
        this.nativeElement = this.initNative(selector, type);
        this.exists = !!this.nativeElement;
    }

    initNative(selector, type) {
        switch (type) {
            case 'single':
                return document.querySelector(selector);
            case 'all':
                return document.querySelectorAll(selector);
            default:
                return null;
        }
    }

    addClass(...className) {
        this.nativeElement.classList.add(...className);
    }

    removeClass(...className) {
        this.nativeElement.classList.remove(...className);
    }

    addStyle(styles) {
        Object.keys(styles).forEach(key => {
            this.nativeElement.style[key] = styles[key];
        });
    }
}

export default Element;