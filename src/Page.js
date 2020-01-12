import Element from "./Element";
import {
    checkRequired
} from "./helpers/util";

class Page extends Element {
    /**
     * Creates an instance of Page.
     * @param {string} url
     * @param {equal | unequal | starts | contains} rule 
     * @memberof Page
     */
    constructor(
        url = checkRequired('url'),
        rule = checkRequired('rule'),
        key = checkRequired('key'),
        breakpoints
    ) {
        super('body', key, null, 'single');
        this.url = url;
        this.rule = rule;
        this.breakpoint = breakpoints;
        this.active = this.matchRule(url, rule) && this.matchBreakpoints(breakpoints);
    }

    /**
     *
     *
     * @param {string} url
     * @param {equal | unequal | starts | contains} rules[]
     * @returns Boolean
     * @memberof Page
     */
    matchRule(url, rules) {
        const currentUrl = window.location.href;

        return rules.reduce((acc, rule) => {
            if (!acc) {
                return false;
            }
            switch (rule) {
                case 'equal':
                    acc = currentUrl === url;
                    break;
                case 'unequal':
                    acc = currentUrl !== url;
                    break;
                case 'starts':
                    acc = currentUrl.startsWith(url);
                    break;
                case 'contains':
                    acc = currentUrl.indexOf(url) !== -1;
                    break;
                default:
                    acc = false;
            }
            return acc;
        }, true)
    }

    matchBreakpoints(breakpoints) {
        if (breakpoints && breakpoints.length) {
            const width = window.innerWidth;
            return width > breakpoints[0] && width <= breakpoints[1];
        }

        return true;
    }
}

export default Page;