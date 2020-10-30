'use strict';

class DomElement {
    constructor (selector, height = '100px', width = '100px', bg = 'salmon',fontSize = '14') {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    }

    createNewElement () {
        
        let newDiv = document.createElement('div');
        newDiv.style.cssText = `display: flex;
            justify-content: center;
            align-items: center;`;
        this.selector = prompt('.name или #name?');
        if (this.selector.substring(0, 1).trim() === '.') {
            newDiv.classList.add(this.selector.substr(1));
            newDiv.style.background = 'tomato';
        } else if (this.selector.substring(0, 1).trim() === '#') {
            newDiv.id = this.selector.substr(1);
            newDiv.style.background = 'lime';
        } else {
            this.createNewElement();
        }

        newDiv.textContent = this.selector.substr(1).trim();
        newDiv.style.height = parseInt(this.height.trim()) + 'px';
        newDiv.style.width = parseInt(this.width.trim()) + 'px';
        newDiv.style.fontSize = parseInt(this.fontSize.trim()) + 'px';
        document.body.append(newDiv);
    }
}

const newElement1 = new DomElement();

newElement1.createNewElement();

console.dir(newElement1);

