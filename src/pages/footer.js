export default function createFooter(element) {
    const footer = document.createElement('footer');
    const text = document.createElement('p');

    text.textContent = 'Copyright © 2023 chaseseidel';
    text.setAttribute('id', 'footer-text');

    footer.setAttribute('id', 'footer');
    footer.appendChild(text);

    element.appendChild(footer);
}