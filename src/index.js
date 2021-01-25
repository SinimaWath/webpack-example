import { Menu } from './modules/menu/menu.js';

import './index.scss';

function start() {
    const menu = new Menu({
        parent: document.querySelector('#app-root'),
        title: 'Title',
        items: ["Торт", "Пончик"],
    });

    menu.render();
}


start();