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

    return menu;
}