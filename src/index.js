import './style.css';

function component() {
    const element = document.createElement('div');
  
    element.textContent = 'Hi'
    element.classList.add('hello');
  
    return element;
}
  
document.body.appendChild(component());