function cargarPagina() {
    mostrarNumeroTelefonico();
    $("#codigoValidacion").keyup(ingresoCodigo);
}

function mostrarNumeroTelefonico() {
    $("#numeroTel").html(localStorage.getItem("phone"));
}

function ingresoCodigo() {
    var $codigoValidacionIngresado1 = $("#codigoValidacion").val();
    $codigoValidacionIngresado2 = $codigoValidacionIngresado1.length;
    if ($codigoValidacionIngresado2 == 6) {
        comprobarCodigo($codigoValidacionIngresado1);
    }
} 
var contador = 0;

function comprobarCodigo(codigoIngresado) {
    var $codigoValidacion = localStorage.getItem("code");
    if (codigoIngresado == $codigoValidacion){
        location.href = "../../views/view4.html";
    }
    else{
        generarOtroCodigo();
    }
}


function generarOtroCodigo(){
    
}

$(document).ready(cargarPagina);
