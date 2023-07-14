import createTabs from "./tab";
import createFooter from "./footer";

export default function createAboutPage(element) {
    createTabs(element);

    const aboutPage = document.createElement('div');
    const title = document.createElement('h1');
    const img = document.createElement('img');
    const text = document.createElement('p'); 

    title.textContent = 'About Us';
    title.setAttribute('id', 'page-title');

    img.setAttribute('id', 'chef-img');
    img.setAttribute('src', '../src/img/chef.jpg');
    img.setAttribute('alt', 'Chef Picture');

    text.textContent = 'Welcome to Belle Étoile, where exquisite flavors meet impeccable elegance. Located in the heart of Portland, Oregon, our French restaurant embodies the essence of sophistication and culinary excellence. With a commitment to using only the finest locally-sourced ingredients, our skilled chefs craft each dish with meticulous attention to detail, creating a symphony of flavors that will transport your taste buds to the vibrant streets of Paris. From the moment you step through our doors, you will be enveloped in a warm and inviting ambiance, adorned with tasteful décor and an air of refined luxury. Whether you join us for a romantic dinner, a celebration with friends, or a business gathering, our attentive staff will ensure your experience is nothing short of extraordinary. Indulge in our extensive wine selection, carefully curated to complement our exquisite menu offerings, and allow our sommelier to guide you through a sensory journey like no other. At Belle Étoile, we believe that dining is an art, and we invite you to experience the artistry of French cuisine at its finest.';
    text.setAttribute('id', 'page-text');

    aboutPage.classList.add('container');

    aboutPage.appendChild(title);
    aboutPage.appendChild(img);
    aboutPage.appendChild(text);

    element.appendChild(aboutPage);
    
    createFooter(content);
}