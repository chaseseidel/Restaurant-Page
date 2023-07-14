import createTabs from "./tab";

export default function createContactPage(element) {
    createTabs(element);

    const contactPage = document.createElement('div');
    const title = document.createElement('h1');
    const text = document.createElement('p'); 
    const info = document.createElement('div');
    const map = document.createElement('iframe');

    title.textContent = 'Contact';
    title.setAttribute('id', 'page-title');

    text.textContent = 'Feel free to reach out to us via phone, email, or visit our website for reservations, inquiries, or any other information you may need. We look forward to welcoming you to Belle Étoile!';
    text.setAttribute('id', 'page-text');

    info.classList.add('info');

    infoArray.forEach(item => {
        const infoItem = document.createElement('div');
        const label = document.createElement('h2');
        const description = document.createElement('p');

        label.textContent = item.label;
        label.classList.add('label');

        description.textContent = item.description;
        description.classList.add('text');

        infoItem.classList.add('info-item');

        infoItem.appendChild(label);
        infoItem.appendChild(description);

        info.appendChild(infoItem);
    })

    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3871431362973!2d-122.67780383712606!3d45.520810007166034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a041928b399%3A0x56026eb2a95a7513!2s320%20SW%206th%20Ave%2C%20Portland%2C%20OR%2097204!5e0!3m2!1sen!2sus!4v1689356903130!5m2!1sen!2sus');
    map.setAttribute('loading', 'lazy');
    map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    map.setAttribute('id', 'map');

    info.appendChild(map);

    contactPage.classList.add('container');

    contactPage.appendChild(title);
    contactPage.appendChild(text);
    contactPage.appendChild(info);

    element.appendChild(contactPage);
}

const infoItem = (label, description)  => {
    return {
        label,
        description
    };
}

const address = infoItem('Address', '123 Main Street, Portland, Oregon, 12345');
const phone = infoItem('Phone', '+1 (555) 123-4567');
const email = infoItem('Email', 'info@belleetoilerestaurant.com');
const instagram = infoItem('Social Media', 'www.instagram.com/belleetoilerestaurant');

const infoArray = [
    address,
    phone,
    email,
    instagram
];