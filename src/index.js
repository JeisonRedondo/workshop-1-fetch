/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseURL = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

const formatPrice = (price) => {

     const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency:'USD'
     }).format(price)
    
    return newPrice;
}

// internationalization:Intl
/*1. format dates */
/*2. format coins */

// Web API:
// Connect us to server
window.fetch(`${baseURL}/api/avo`)
// Process the response and convert to JSON
    .then(respuesta => respuesta.json())
// JSON -> Data -> Render info browser 
    .then(responseJSON => {
        // console.log(data);
        const allItems = [];
        responseJSON.data.forEach((element) => {
            // Create element :image
            const image = document.createElement('img');
            image.src = `${baseURL}${element.image}`;
            // Create title
            const title = document.createElement('h2');
            title.textContent = element.name;
            // title.style = "font-size:16px";
            // title.style.fontSize = "3rem";
            title.className = 'avocados-title';
            // Create price
            const price = document.createElement('div');
            price.textContent = formatPrice(element.price);
            price.className = "avocados-price";
            
            
            const container = document.createElement('div');
            container.className = "avocados_container";
            container.append(image, title, price);
            
            allItems.push(container)
            
        });
        appNode.append(...allItems);
    })