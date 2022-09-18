import './style.css'
import {header} from './header.js';
import {footer} from './footer.js';
import {homepage} from './homepage.js';

const mainContent = () => {
    const mainContent  = document.createElement('div');
    mainContent.setAttribute('class', 'main-content');
    return mainContent;
}

const divs ={
    header: header(),
    mainContent: mainContent(),
    homepage: homepage(),
    footer: footer()
}  
const content = document.getElementById('content');

content.appendChild(divs.header);
content.appendChild(divs.mainContent);
divs.mainContent.appendChild(divs.homepage);
content.appendChild(divs.footer);