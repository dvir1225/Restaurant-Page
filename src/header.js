export function header() {
    const divHeader = document.createElement('div');
    divHeader.setAttribute('class', 'header');

    const logo = document.createElement('img');
    logo.setAttribute('id', 'logo');
    logo.setAttribute('src', '../src/logo.jpg');
    
    const divTabs = document.createElement('div');
    divTabs.setAttribute('class', 'tabs');
    
    const homepageTab = document.createElement('button');
    homepageTab.setAttribute('class', 'tab homepageTab');
    homepageTab.innerText = 'Homepage';
 
    const menuTab = document.createElement('button');
    menuTab.setAttribute('class', 'tab menuTab');
    menuTab.innerText = 'Menu';
 
    const contactTab = document.createElement('button');
    contactTab.setAttribute('class', 'tab contactTab');
    contactTab.innerText = 'Contact Us';
   
    divTabs.appendChild(homepageTab);
    divTabs.appendChild(menuTab);
    divTabs.appendChild(contactTab);
    divHeader.appendChild(logo);
    divHeader.appendChild(divTabs);
    
    return divHeader;
};