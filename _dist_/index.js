/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector('#app');
appNode.className = 'container-avocados';
/* Deelegación de eventos */
appNode.addEventListener('click', (event) => {
    if(event.target.nodeName === 'H2') {
        alert(event.target.innerText);
    }
})

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
        data.data.forEach(avocado => {
            const imgAvocado = document.createElement('img');
            imgAvocado.src = `${baseUrl}${avocado.image}`;
            imgAvocado.title = avocado.name;
            imgAvocado.alt = avocado.name;
            imgAvocado.className = 'img-avocado';
            const nameAvocado = document.createElement('h2');
            nameAvocado.textContent = avocado.name;
            nameAvocado.className = 'text-xl text-center text-green-200 font-semibold';
            const price = document.createElement('p');
            price.textContent = `Price: ${formatPrice(avocado.price)}`;
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