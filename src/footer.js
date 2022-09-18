export function footer(){
    const divFooter = document.createElement('div');
    divFooter.setAttribute('class', 'footer');
    const footerText = document.createElement('p');
    footerText.setAttribute('class', 'footerText');
    footerText.innerText = 'Drinking and driving should be avoided. But don\'t worry, our cocktails are so good you won\'t "just have one", and you\'ll be taking a cab'
    divFooter.appendChild(footerText);
    return divFooter;
}