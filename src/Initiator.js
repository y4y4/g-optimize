import Page from "./Page";
import {
    checkRequired
} from "./helpers/util";

class Initiator {
    constructor(config) {
        if (config && typeof config === 'object') {
            this.config = config;
            return this.init(config);
        }
    }

    init(config = checkRequired('cofig')) {
        return config.pages.reduce((acc, page) => {
            const p = new Page(page.url, page.rule, page.key, page.breakpoint);
            if (p.active) {
                p.applyChanges(page);
                this.initElements(p, page);
                this.initActions(p, page.actions)
                return Object.assign({}, acc, {
                    [p.key]: p
                })
            }
            return acc;
        }, {});
    }

    initElements(parent, config) {
        config.elements.forEach(element => {
            let newElement;
            if (element.new) {
                newElement = parent.createElement(element.new, element.selector, element.key, element);
            } else {
                newElement = parent.addElement(element.selector, element.key).applyChanges(element);
            }
            if (element.elements && element.elements.length > 0) {
                return this.initElements(newElement, element);
            } else {
                return newElement;
            }
        });
    }

    initActions(page, actions) {
        console.log(page, actions);
        if (actions && actions.length && page) {
            actions.forEach(action => {
                this.processAction(action, page);
            });
        }
        return page;
    }


    processAction(action, page) {
        switch (action.type) {
            case 'moveElement': {
                const target = this.findElement(action.args[0], page);
                const element = this.findElement(action.args[2], page);
                if (target && element) {
                    target.moveElement(action.args[1], element, action.args[3])
                }
                break;
            }

            case 'removeClass': {
                const target = this.findElement(action.args[0], page);
                if (target) {
                    target.removeClass(action.args[1])
                }
            }
            default:
                break;

        }
    }

    findElement(target, page) {
        return (page) ? new Function('_', `return  _.${target}`)(page) : null;
    }
}


export default Initiator;