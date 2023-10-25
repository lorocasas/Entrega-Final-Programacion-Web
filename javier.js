// Formulario de contacto
const formulario = document.getElementById('contacto-form');

formulario.addEventListener('submit', function(e) {

    
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return
    } else {
        alert('Formulario enviado correctamente.');
        formulario.reset();
    }
    console.log(nombre)
    console.log(correo)
    console.log(mensaje)


    const contacto = {  
        name: nombre,name: mensaje,correo: mensaje
     }
});


// JavaScript para mostrar y ocultar el menú en dispositivos móviles
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('visible');
    menuBtn.classList.toggle('hide');
});







