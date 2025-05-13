function enviaResposta() {
    document.getElementById("inputUsuario").innerHTML = "Nome enviado foi: " + window.prompt("Digite seu nome:");
}

    function exibeResposta() {
    window.alert("Nome enviado foi: " + document.getElementById("nome").value);
}