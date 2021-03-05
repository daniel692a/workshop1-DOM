/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector('#app');
appNode.className = 'container-avocados';

const formatPrice = (price) =>{
    /* API de internacionalización */
    const newPrice = new window.Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
    return newPrice;
}

const fetchAvocados = async() => {
    try {
        const response = await fetch(`${baseUrl}/api/avo`);
        const data = await response.json();
        const avocados = [];
        data.data.forEach(e => {
            const imgAvocado = document.createElement('img');
            imgAvocado.src = `${baseUrl}${e.image}`;
            imgAvocado.title = e.name;
            imgAvocado.alt = e.name;
            imgAvocado.className = 'img-avocado';
            const nameAvocado = document.createElement('h2');
            nameAvocado.textContent = e.name;
            nameAvocado.className = 'text-xl text-center text-green-500';
            const price = document.createElement('p');
            price.textContent = `Price: ${formatPrice(e.price)}`;
            price.className = 'text-center text-green-50';
            const container = document.createElement('div');
            container.append(imgAvocado, nameAvocado, price);
            container.className = 'rounded-lg';
            avocados.push(container);
        });
        appNode.append(...avocados);
    } catch (error) {
        console.error(error);
    }
}
fetchAvocados();