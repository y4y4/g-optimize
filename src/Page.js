import Base from "./Base";
import Element from "./Element";
import {
    checkRequired
} from "./helpers/util";

class Page extends Base {
    /**
     * Creates an instance of Page.
     * @param {string} url
     * @param {equal | unequal | starts | contains} rule 
     * @param {} elements 
     * @memberof Page
     */
    constructor(url = checkRequired('url'), rule = checkRequired('rule')) {
        super(Page.name);
        this.url = url;
        this.rule = rule;
        this.root = new Element('body', 'single');
        this.elements = {};
        this.active = this.isActive(url, rule);
    }

    isActive(url, rule) {
        const currentUrl = window.location.href;
        switch (rule) {
            case 'equal':
                return currentUrl === url;
            case 'unequal':
                return currentUrl !== url;
            case 'starts':
                return currentUrl.startsWith(url);
            case 'contains':
                return currentUrl.indexOf(url) !== -1;
            default:
                return false;
        }
    }


    addElement(selector = checkRequired('selector'), key = checkRequired('key'), type = 'single') {
        const element = new Element(selector, type);
        if (element.exists) {
            this.elements = Object.assign(this.elements, {
                [key]: element
            });
            return element;
        } else {
            throw new Error(`Not found elemnent with selector: ${selector}`);
        }
    }
}

export default Page;