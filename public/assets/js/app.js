var url = {
    url: 'https://localhost:3000/api/registerNumber'
}
var cargarPagina = function() {
    cargarCarrusel();
    $("#icon_telephone").keyup(telefonoTerminosValidados);
    $("#filled-in-box").change(telefonoTerminosValidados);
    $(document).on("click", "#btnContinuar", continuarRegistro);
}

function cargarCarrusel() {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    $('.carousel').carousel();
}

function telefonoTerminosValidados() {
    var $inputNumber = $("#icon_telephone").val();
    var $inputCheckbox = $("#filled-in-box");
    var $btnContinuar = $("#btnContinuar");
    if($inputNumber.length == 10 && $inputCheckbox.prop("checked")){
        $btnContinuar.removeClass("disabled");
    }
    else{
        $btnContinuar.addClass("disabled");
    }
}

function continuarRegistro(){
    
}

$(document).ready(cargarPagina);