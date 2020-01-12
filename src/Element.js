import Base from "./Base";

class Element extends Base {

    /**
     * Creates an instance of Element.
     * @param {string} selector
     * @param {'single' | 'all'} [type='single']
     * @memberof Element
     */
    constructor(
        selector = checkRequired('selector'),
        key = checkRequired('key'),
        parentKey = null,
        type = 'single',
    ) {
        super(Element.name);
        this.parentKey = parentKey;
        this.key = key;
        this.selector = selector;
        this.nativeElement = this.initNative(selector, type);
        this.elements = {};
        this.exists = !!this.nativeElement;
    }

    /**
     *  Initialize native DOM element
     *
     * @param {string} selector
     * @param {'single' | 'all'} type
     * @memberof Element
     */
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

    /**
     *  Create and add new child element
     *
     * @param {string} [selector=checkRequired('selector')]
     * @param {string} [key=checkRequired('key')]
     * @param {'single' | 'all'} [type='single']
     * @memberof Element
     */
    addElement(selector = checkRequired('selector'), key = checkRequired('key'), type = 'single') {
        const mergedSelectors = `${this.selector} ${selector}`;
        const element = new Element(mergedSelectors, key, this.key, type);
        if (element.exists) {
            this.elements = Object.assign(this.elements, {
                [key]: element
            });
            return element;
        } else {
            throw new Error(`Not found elemnent with selector: ${selector}`);
        }
    }

    getElement(key) {
        return this.elements[key] || null;
    }

    applyChanges(config) {
        if (config) {
            this.addClass(config.class)
                .addStyle(config.style)
                .addText(config.text)
                .addHtml(config.html)
                .addAttributes(config.attributes)
                .addEventListeners(config.events);
        }

        return this;
    }

    /**
     *  Add class on element
     *
     * @param {string[]} className
     * @returns Self
     * @memberof Element
     */
    addClass(className) {
        if (className && className.length) {
            this.nativeElement.classList.add(...className);
        }
        return this;
    }

    /**
     * Remove class from element
     *
     * @param {string[]} className
     * @returns Self
     * @memberof Element
     */
    removeClass(className) {
        if (className && className.length) {
            this.nativeElement.classList.remove(...className);
        }
        return this;
    }

    /**
     * Add new styles 
     *
     * @param {[key: string]: string } styles
     * @returns Self
     * @memberof Element
     */
    addStyle(styles) {
        if (styles && typeof styles === 'object') {
            Object.keys(styles).forEach(key => {
                this.nativeElement.style[key] = styles[key];
            });
        }
        return this;
    }

    /**
     * Add inner text into element
     *
     * @param {string} text
     * @returns Self
     * @memberof Element
     */
    addText(text) {
        if (text) {
            this.nativeElement.innerText = text;
        }
        return this;
    }

    /**
     *  Add inner html into element
     *
     * @param {string} html
     * @returns Self
     * @memberof Element
     */
    addHtml(html) {
        if (html) {
            this.nativeElement.innerHTML = html;
        }
        return this;
    }

    /**
     * Add attributes on element
     *
     * @param {*} attributes
     * @returns
     * @memberof Element
     */
    addAttributes(attributes) {
        if (attributes && attributes.length) {
            attributes.forEach(attribute => {
                this.nativeElement.setAttribute(attribute.name, attribute.value)
            });
        }
        return this;
    }

    addEventListeners(events) {
        if (events && events.length) {
            // const event = document.querySelector(this.selector);
            events.forEach(event => {
                // document.querySelector(this.selector).addEventListener(event.event, event.callback);
                this.nativeElement.addEventListener(event.event, event.callback);
            });
        }
    }

    createElement(tag, selector, key, config) {
        const nativeElement = document.createElement(tag);
        nativeElement.setAttribute('id', selector);
        this.nativeElement.appendChild(nativeElement);

        const mergedSelectors = `${this.selector} ${tag}#${selector}`;
        const element = new Element(mergedSelectors, key, this.key);
        element.applyChanges(config);

        this.elements = Object.assign(this.elements, {
            [key]: element
        });
        return this;
    }

    /**
     * Move elemenet
     * 
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
     * 
     * @param {*} elementKey
     * @param {*} fromElement
     * @param {string} [position='beforeend'] | beforebegin, afterbegin, beforeend, afterend
     * @returns
     * @memberof Element
     */
    moveElement(elementKey, fromElement, position = 'beforeend') {
        if (elementKey && fromElement) {
            const targetElement = fromElement.getElement(elementKey)
            if (targetElement) {
                const targetElementNode = targetElement.nativeElement.cloneNode(true);
                this.nativeElement.insertAdjacentElement(position, targetElementNode);

                this.elements = Object.assign(this.elements, {
                    [targetElement.key]: targetElement
                });
                fromElement.removeElement(targetElement.key);
            }
        }
        return this;
    }

    removeElement(elementKey) {
        const element = this.elements[elementKey];
        if (element) {
            element.nativeElement.remove()
            delete this.elements[elementKey];
        }
        return this;
    }

}

export default Element;