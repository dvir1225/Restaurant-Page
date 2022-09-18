import homepagePic from '../src/bar&lounge.jpg';

export function homepage() {
    const homepage = document.createElement('div');
    homepage.setAttribute('class', 'homepage');
    
    const pic = document.createElement('img');
    pic.setAttribute('id', 'homepagePic');
    pic.setAttribute('src', homepagePic);

    const homepageText = document.createElement('div');
    homepageText.setAttribute('class', 'homepageText');

    const homepageH1 = document.createElement('h1');
    homepageH1.setAttribute('class', 'homepageH1Text');
    homepageH1.innerText = "Odin's Bar & Lounge";

    const homepageP = document.createElement('p');
    homepageP.setAttribute('class', 'homepagePText');
    homepageP.innerHTML = `Are you the type for a beer or a whiskey?</br>
    Or maybe you prefer wine? Cocktails? </br>
    It doesn't matter, we've got all the good stuff. </br>
    And because not many can (or should...) get the good stuff while hungry, </br>
    we also have some of the best bites you'll ever have!</br>
    Just come over and choose.  </p>`
    homepageText.appendChild(homepageH1);
    homepageText.appendChild(homepageP);

    homepage.appendChild(pic);
    homepage.appendChild(homepageText);

    return homepage;    
};