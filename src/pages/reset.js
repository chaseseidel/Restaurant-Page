export default function resetPage(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };
}