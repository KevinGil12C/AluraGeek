import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("form");


async function crear_producto(evento) {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await conexionAPI.crear_producto(nombre, precio, imagen); // Utiliza await para esperar a que se resuelva la promesa
        window.location.href = "../envio-terminado.html";
    } catch (error) {
        alert(error);
    }
}

formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    console.log('Se hizo clic en el botón de enviar');
    console.log('Formulario seleccionado:', formulario);

    crear_producto(evento);
});
