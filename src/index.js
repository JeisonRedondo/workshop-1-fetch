/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";

// Web API:
// Conectarnos al servidor
window.fetch(url)
// procesar la respuesta y convertirla en JSON
    .then(respuesta => respuesta.json())
// JSON -> Data -> Renderizar info browser 
    .then(responseJSON => {
        // console.log(data);
        const allItems = [];
        responseJSON.data.forEach((element) => {
            // Crear elemento:imagen
            const image = document.createElement('img');
            // Crear titulo
            const title = document.createElement('h2');
            // crear precio
            const price = document.createElement('div');
            
            const container = document.createElement('div');
            container.append(image, title, price);
            
            allItems.push(container)
            
        });
        document.body.append(...allItems);
    })