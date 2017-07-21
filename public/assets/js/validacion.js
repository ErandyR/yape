var api = {
    urlRegisterNumber: "http://localhost:3000/api/registerNumber"
}
var cargarPagina = function () {
    $("#icon_telephone").keyup(telefonoTerminosValidados);
    $("#filled-in-box").change(telefonoTerminosValidados);
    $("#btnContinuar").click(continuarRegistro);
}

function telefonoTerminosValidados() {
    var $inputNumber = $("#icon_telephone").val();
    var $inputCheckbox = $("#filled-in-box");
    var $btnContinuar = $("#btnContinuar");
    if ($inputNumber.length == 10 && $inputCheckbox.prop("checked")) {
        $btnContinuar.removeClass("disabled");
    } else {
        $btnContinuar.addClass("disabled");
    }
}

function continuarRegistro() {
    var $phone = $("#icon_telephone").val();
    $.post(api.urlRegisterNumber, {
            phone: $phone,
            terms: true
        },
        function (respuesta) {
            console.log(respuesta.data.code);
            var $codigo = respuesta.data.code;
            alert("Este es tu código: " + $codigo);
            localStorage.setItem("phone", respuesta.data.phone);
            localStorage.setItem("code", respuesta.data.code);
        });
}

$(document).ready(cargarPagina);
