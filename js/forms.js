//Captura el input
function captureInput() {
    var input = document.querySelector("#input");
    return input.value;
}

//Muestra la salida
function output(encryptedString){
    document.querySelector("#output").value=encryptedString;
}