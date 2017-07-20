
var cargarPagina = function() {
    cargarCarrusel();
}

function cargarCarrusel() {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    $('.carousel').carousel();
}

$(document).ready(cargarPagina);