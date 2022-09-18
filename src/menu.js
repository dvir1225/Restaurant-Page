export function menu(){
    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu');

    function createMenuItem(name, info, price){
        const card = document.createElement('div');
        card.setAttribute('class', 'menu-item');
        
        const dish = document.createElement('span');
        dish.setAttribute('class', 'dishName');
        dish.innerText = name;

        const information = document.createElement('span');
        information.setAttribute('class', 'dishInfo');
        information.innerText = info;

        const cost = document.createElement('span');
        cost.setAttribute('class', 'dishCost');
        cost.innerText = price;

        card.appendChild(dish);
        card.appendChild(information);
        card.appendChild(cost);

        return card;
    }

    const fish = createMenuItem('Salmon', 'Delicious fresh caught', 25);
    menu.appendChild(fish)

    const burger = createMenuItem('Burger', 'Grass fed beef', 30);
    menu.appendChild(burger);

    const pasta = createMenuItem('Pasta', 'Hand made pasta', 25);
    menu.appendChild(pasta)

    const chips = createMenuItem('French Fries', 'Freshly cut', 15)
    menu.appendChild(chips);

    const beer = createMenuItem('Malka Admonit', 'Israel\'s finest', 18)
    menu.appendChild(beer);

    const wine = createMenuItem('Wine selection', 'Ask our waiters', 25)
    menu.appendChild(wine);

    const softDrink = createMenuItem('Soft Drinks', 'We have it all', 12);
    menu.appendChild(softDrink);

    return menu;
}