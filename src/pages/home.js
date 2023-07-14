import createTabs from "./tab";
import createFooter from "./footer";

export default function createHomePage(element) {
    createTabs(element);

    const homePage = document.createElement('div');
    const message = document.createElement('h2');
    const tableBtn = document.createElement('button'); 

    message.textContent = 'Indulge In French Elegance';
    message.setAttribute('id', 'message');

    tableBtn.textContent = 'Book A Table';
    tableBtn.setAttribute('id', 'table-btn');

    homePage.classList.add('home-page');
    homePage.appendChild(message);
    homePage.appendChild(tableBtn);

    element.appendChild(homePage);

    createFooter(content);
}

export function firstLoad() {
    const content = document.getElementById('content');

    createHomePage(content);
}