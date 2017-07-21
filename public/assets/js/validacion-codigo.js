function cargarPagina() {
    mostrarNumeroTelefonico();
    $("#codigoValidacion").keyup(ingresoCodigo);
    disminuirPorSegundo();
}

function disminuirPorSegundo() {
    setInterval(generarOtroCodigo, 21000)
}
//funcion para imprimir el timpo disminuyando de 21 a 0
//var tiempoTranscurriendo = function(){
//    for(var i = 21; i>=0; i--) {
//        console.log(i);
//        if(i == 0){
//            generarOtroCodigo;
//        }
//    }
//}
//
//function dirigeAFuncion(contador){
//            if(contador == 0){
//                generarOtroCodigo;
//            }
//            else{
//                disminuirPorSegundo;
//            }
//        }

function mostrarNumeroTelefonico() {
    $("#numeroTel").html(localStorage.getItem("phone"));
}

var $codigoValidacion = localStorage.getItem("code");

function ingresoCodigo() {
    var $codigoValidacionIngresadoValor = $("#codigoValidacion").val(); //codigo que se ingresa
    $codigoValidacionIngresadoLength = $codigoValidacionIngresadoValor.length; //logitud del codigo ingresado
    var $codigoValidacion = localStorage.getItem("code"); //el codigo que me proporsiona mi api
    var $codigoValidacionLength = $codigoValidacion.length; //la longitud del codigo que proporsiona el api
    if ($codigoValidacionIngresadoLength == $codigoValidacionLength) {
        comprobarCodigo($codigoValidacionIngresadoValor);
    }
}

function comprobarCodigo(codigoIngresado) {
    if (codigoIngresado == $codigoValidacion) {
        location.href = "../../views/view4.html";
    } else if (codigoIngresado != $codigoValidacion) {
        generarOtroCodigo();
    }
}

var api = {
    urlGenerarCodigo: 'http://localhost:3000/api/resendCode'
}

function generarOtroCodigo() {
    inputEnBlanco();
    $.post(api.urlGenerarCodigo, {
            phone: localStorage.getItem("phone")
        }).then(function (respuesta) {
            console.log(respuesta.data);
            var $codigo = respuesta.data;
            alert(respuesta.message + " " + $codigo);
            localStorage.setItem("code", $codigo);
            $("#codigoValidacion").keyup(ingresoCodigo);
        }).catch(function (error) {
            console.log(error)
        })
}

function inputEnBlanco(){
    $("#codigoValidacion").val("");
}

$(document).ready(cargarPagina);
