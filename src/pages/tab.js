export default function createTabs(element) {
    const topBar = document.createElement('div');
    const restaurantName = document.createElement('h1');
    const tabs = document.createElement('nav');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const about = document.createElement('div');
    const contact = document.createElement('div');

    restaurantName.textContent = 'Belle Étoile';
    restaurantName.setAttribute('id', 'restaurant-name');

    home.textContent = 'Home';
    home.classList.add('tab');
    home.setAttribute('id', 'home');
    
    menu.textContent = 'Menu';
    menu.classList.add('tab');
    menu.setAttribute('id', 'menu');

    about.textContent = 'About';
    about.classList.add('tab');
    about.setAttribute('id', 'about');

    contact.textContent = 'Contact';
    contact.classList.add('tab');
    contact.setAttribute('id', 'contact');

    tabs.classList.add('tabs');
    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(about);
    tabs.appendChild(contact);

    topBar.classList.add('top-bar');
    topBar.appendChild(restaurantName);
    topBar.appendChild(tabs);

    element.appendChild(topBar);
}