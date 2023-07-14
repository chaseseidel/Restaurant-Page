import createHomePage from "./home";
import createMenuPage from "./menu";
import createAboutPage from "./about";
import resetPage from "./reset";

export default function createButtonListeners(element) {
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const aboutButton = document.getElementById('about');

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
}