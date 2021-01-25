import {
    menuContainerTemplate,
    menuListItemsTemplate
} from './templates.js';

export class Menu {
    constructor({ parent, title, items }) {
        this._parent = parent;
        this._title = title;
        this._items = items;

        this._onMenuClick = this._onMenuClick.bind(this);
    }


    get container() {
        return this._parent.querySelector('[data-component="MenuContainer"]');
    }


    render() {
        const template = menuContainerTemplate({
            title: this._title,
            menu: menuListItemsTemplate({
                items: this._items,
            })
        })


        this._parent.innerHTML = template;

        this.container.addEventListener('click', this._onMenuClick);
        this.container.addEventListener('menu:toggle', console.log);
    }

    destroy() {
        this.container.removeEventListener('click', this._onMenuClick);
        this.container.remove();
    }

    _onMenuClick() {
        this.container.classList.toggle('open');
    }
}
