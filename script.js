
function encriptar (){

    var frase = document.getElementById("textencriptado").value.toLowerCase();

    var textencriptado = frase.replace(/e/img, "enter");
    var textencriptado = textencriptado.replace(/i/img, "imes");
    var textencriptado = textencriptado.replace(/a/img, "ai");
    var textencriptado = textencriptado.replace(/o/img, "ober");
    var textencriptado = textencriptado.replace(/u/img, "ufat");

    document.getElementById("textdesencriptado").innerHTML = textencriptado
    document.getElementById("botonCopiar").style.display = "show"; 
    document.getElementById("botonCopiar").style.display = "inherit"; 

}

function desencriptar (){

    var frase = document.getElementById("textencriptado").value.toLowerCase();

    var textencriptado = frase.replace(/enter/img, "e");
    var textencriptado = textencriptado.replace(/imes/img, "i");
    var textencriptado = textencriptado.replace(/ai/img, "a");
    var textencriptado = textencriptado.replace(/ober/img, "o");
    var textencriptado = textencriptado.replace(/ufat/img, "u");

    document.getElementById("textdesencriptado").innerHTML = textencriptado

}

function copiar (){

    var contenido = document.querySelector("#textdesencriptado");
    var range = document.createRange();
    range.selectNode(contenido);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

