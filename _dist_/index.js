/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = 'https://platzi-avo.vercel.app/api/avo';

const fetchAvocados = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const avocados = [];
        data.data.forEach(e => {
            const img = document.createElement('img');
            img.src = `https://platzi-avo.vercel.app/${e.image}`;
            img.title = `${e.name}`;
            img.alt = `${e.name}`;
            const h1 = document.createElement('h1');
            h1.textContent = `${e.name}`;
            avocados.push(img, h1);
        });
        document.body.append(...avocados);
    } catch (error) {
        console.error(error);
    }
}
fetchAvocados();