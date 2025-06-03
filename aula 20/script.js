document.getElementById("nascimento").style.backgroundImage = url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWtBENlLJMHoAHAUV7TnSCqzfc8lvZXJQeKQ&s');
document.getElementById("calculadora").style.backgroundImage = url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbe63SKpZvdYi_7AiNZjegAlIbno0L0u72A&s');

function calculaidade() {
    var hoje = new Date()

    let result = document.getElementById("resultado")

    dia = document.getElementById("dia").value
    mes = document.getElementById("mes").value
    ano = document.getElementById("ano").value

    if (dia <= 0 || dia > 31 || ano <= 0) {
        alert("Digite uma data de nascimento valida")
        return
    }

    nascimento = new Date(ano + "/" + mes + "/" + dia);

    var idade = hoje.getFullYear() - nascimento.getFullYear()

    let dth = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())
    let dth2 = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())


    if (dth < dth2) {
        idade--;
    }

    result.style.color = random_rgba();
    result.innerHTML = "<b>" + `  Você tem ${idade} ` + "</b>"

}
document.getElementById("imagem").innerHTML = "bebereborn.jpg"
document.getElementById("imagem").style.backgroundImage.url = "calculadora.jpg";

function Calcular() {
    let valor1 = Number(document.getElementById("n1").value)
    let valor2 = Number(document.getElementById("n2").value)
    let operador = (document.getElementById("operacao").value)
    let resultadocalc = 0
    switch (operador) {
        case '+':
            resultadocalc = valor1 + valor2;
            break;
        case '-':
            resultadocalc = valor1 - valor2;
            break;
        case '*':
            resultadocalc = valor1 * valor2;
            break;
        case '/':
            resultadocalc = valor1 / valor2;
            break;
        default:
            alert('operador não reconhecido');
    }

    let result = document.getElementById("resultadocalc")

    result.style.color = random_rgba();
    result.innerHTML = resultadocalc

}

function random_rgba() {
    var o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function idade(nascimento, hoje) {
    var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
    if (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) <
        new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate()))
        diferencaAnos--;
    return diferencaAnos;
};
