import createTabs from "./tab";

export default function createMenuPage(element) {
    createTabs(element);

    const menu = document.createElement('div');
    const menuTitle = document.createElement('h1');

    menuTitle.textContent = 'Menu';
    menuTitle.setAttribute('id', 'menu-title');

    menu.classList.add('menu');

    menu.appendChild(menuTitle);

    menuArray.forEach(item => {
        const container = document.createElement('div');
        const name = document.createElement('h2');
        const description = document.createElement('p');
        const price = document.createElement('p');

        name.textContent = item.name;
        name.classList.add('item');

        description.textContent = item.description;
        description.classList.add('description');

        price.textContent = item.price;
        price.classList.add('price');

        container.appendChild(name);
        container.appendChild(description);
        container.appendChild(price);
        container.classList.add('item-container');

        menu.appendChild(container);
    })

    element.appendChild(menu);
}

const menuItem = (name, description, price)  => {
    return {
        name,
        description,
        price
    };
}

const itemOne = menuItem("Soupe à l'Oignon Gratinée (French Onion Soup)", "A classic French soup with caramelized onions, rich beef broth, and topped with melted Gruyère cheese.", "$22");
const itemTwo = menuItem("Coq au Vin", "Tender chicken braised in red wine with pearl onions, mushrooms, and aromatic herbs, served with buttery mashed potatoes.", "$26");
const itemThree = menuItem("Filet Mignon au Poivre", "Prime beef tenderloin steak crusted with cracked black peppercorns, cooked to perfection, and accompanied by a velvety green peppercorn sauce.", "$38");
const itemFour = menuItem("Bouillabaisse", "A delightful seafood stew featuring a medley of fresh fish, shrimp, mussels, and clams, simmered in a flavorful saffron-infused broth.", "$32");
const itemFive = menuItem("Ratatouille Provençale", "A colorful vegetarian dish made with roasted eggplant, zucchini, bell peppers, tomatoes, and fragrant herbs, served with crusty bread.", "$24");
const itemSix = menuItem("Escargots de Bourgogne", "Plump Burgundy snails cooked in a garlic and parsley butter, served in their shells for an exquisite French delicacy.", "$28");
const itemSeven = menuItem("Canard à l'Orange", "Tender roasted duck breast served with a tangy orange glaze, accompanied by wild rice pilaf and seasonal vegetables.", "$34");
const itemEight = menuItem("Risotto aux Champignons Sauvages", "Creamy Arborio rice cooked with a medley of wild mushrooms, Parmesan cheese, and fresh herbs, finished with a drizzle of truffle oil.", "$28");

const menuArray = [
    itemOne, 
    itemTwo,
    itemThree,
    itemFour,
    itemFive, 
    itemSix,
    itemSeven, 
    itemEight
];