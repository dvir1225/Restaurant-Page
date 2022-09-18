import './style.css'
import {header} from './header.js';
import {footer} from './footer.js';
import {homepage} from './homepage.js';
import {menu} from './menu.js';
import {contact} from './contact.js'

const mainContent = () => {
    const mainContent  = document.createElement('div');
    mainContent.setAttribute('class', 'main-content');
    return mainContent;
}

const divs ={
    header: header(),
    mainContent: mainContent(),
    homepage: homepage(),
    menu: menu(),
    contact: contact(),
    footer: footer()
}  
const content = document.getElementById('content');

function clearContent() {
   divs.mainContent.innerHTML = '';
}

const appendChilds = (() => {
    content.appendChild(divs.header);
    content.appendChild(divs.mainContent);
    divs.mainContent.appendChild(divs.homepage);
    content.appendChild(divs.footer);
})()


const attachEventListeners = (() => {
    document.addEventListener('click', event => {
        const eventTarget = event.target;
        if (eventTarget.className.includes('homepage')){
            clearContent();
            divs.mainContent.appendChild(divs.homepage);
        };
        if (eventTarget.className.includes('menu')){
            clearContent()
            divs.mainContent.appendChild(divs.menu);
        };
        if (eventTarget.className.includes('contact')){
            clearContent()
            divs.mainContent.appendChild(divs.contact)
        }
    }) 
})();