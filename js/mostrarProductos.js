import {
    conexionAPI
} from "./conexionAPI.js";

const lista = document.querySelector('[data-lista]');

export default function crearCard(nombre, precio, imagen) {
    const producto = document.createElement("div");
    producto.className = "card";

    producto.innerHTML = `
        <img src="${imagen}" class="card-img" />
        <div class="card-container--info">
            <p class="card-container-text">${nombre}</p>
            <div class="card-container--value">
                <p class="card-container--value-text">$ ${precio}</p>
                <img src="img/Vector.png" class="card-container--value-img" />
            </div>
        </div>`
    return producto;
}

async function listar_productos(){
    try {
        const listaAPI = await conexionAPI.listar_productos();
        listaAPI.forEach(productos => lista.appendChild(crearCard(productos.nombre, productos.precio, productos.imagen)));
    } catch (error) {
        console.error(error);
        lista.innerHTML = '<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :(</h2>';
    }
}

listar_productos();