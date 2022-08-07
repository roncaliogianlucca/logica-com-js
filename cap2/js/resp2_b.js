function calcularLanHouse() {
    // cria referência aos elementos da página
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outResposta = document.getElementById("outResposta");

    // obtém conteúdo (e converte em número)
    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);

    // calcula valor a pagar (arredonda para cima)
    var custo = Math.ceil(tempo / 15) * valor;

    // exibe o valor a pagar (com 2 decimais)
    outResposta.textContent = "Valor a pagar R$: " + custo.toFixed(2);
}

// captura botão e associa evento ao click neste botão ao evento calcularLanHouse
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calculaValor);