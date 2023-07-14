import createHomePage from "./home";
import createMenuPage from "./menu";
import createAboutPage from "./about";
import createContactPage from "./contact";
import resetPage from "./reset";

export default function createButtonListeners(element) {
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const aboutButton = document.getElementById('about');
    const contactButton = document.getElementById('contact');

    homeButton.addEventListener('click', () => {
        resetPage(element);
        createHomePage(element);
    });

    menuButton.addEventListener('click', () => {
        resetPage(element);
        createMenuPage(element);
    });

    aboutButton.addEventListener('click', () => {
        resetPage(element);
        createAboutPage(element);
    });

    contactButton.addEventListener('click', () => {
        resetPage(element);
        createContactPage(element);
    })
}