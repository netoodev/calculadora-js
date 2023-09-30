function somar() {
    const input1 = document.querySelector(".input-1");
    const valor1 = parseFloat(input1.value);

    const input2 = document.querySelector(".input-2");
    const valor2 = parseFloat(input2.value);

    const resultadoElement = document.querySelector(".resultado");

    if (!isNaN(valor1) && !isNaN(valor2)) {
    const soma = valor1 + valor2;

    resultadoElement.innerHTML = "O resultado da sua soma é igual a " + soma;

    console.log("O resultado da sua soma é igual a " + soma);

    } else {
    resultadoElement.innerHTML = "Por favor, insira números válidos em ambas as entradas.";
    }
}

function subtrair() {
    const input1 = document.querySelector(".input-1");
    const valor1 = parseFloat(input1.value);

    const input2 = document.querySelector(".input-2");
    const valor2 = parseFloat(input2.value);

    const resultadoElement = document.querySelector(".resultado");

    if (!isNaN(valor1) && !isNaN(valor2)) {
    const subtracao = valor1 - valor2;

    resultadoElement.innerHTML = "O resultado da sua subtração é igual a " + subtracao;

    console.log("O resultado da sua subtração é igual a " + subtracao);

    } else {
    resultadoElement.innerHTML = "Por favor, insira números válidos em ambas as entradas.";
    }
}

function multiplicar() {
    const input1 = document.querySelector(".input-1");
    const valor1 = parseFloat(input1.value);

    const input2 = document.querySelector(".input-2");
    const valor2 = parseFloat(input2.value);

    const resultadoElement = document.querySelector(".resultado");

    if (!isNaN(valor1) && !isNaN(valor2)) {
    const multiplicacao = valor1 * valor2;

    resultadoElement.innerHTML = "O resultado da sua multiplicação é igual a " + multiplicacao;

    console.log("O resultado da sua multiplicação é igual a " + multiplicacao);

    } else {
    resultadoElement.innerHTML = "Por favor, insira números válidos em ambas as entradas.";
    }
}

function dividir() {
    const input1 = document.querySelector(".input-1");
    const valor1 = parseFloat(input1.value);

    const input2 = document.querySelector(".input-2");
    const valor2 = parseFloat(input2.value);

    const resultadoElement = document.querySelector(".resultado");

    if (!isNaN(valor1) && !isNaN(valor2)) {
    const divisao = valor1 / valor2;

    resultadoElement.innerHTML = "O resultado da sua divisão é igual a " + divisao;

    console.log("O resultado da sua divisão é igual a " + divisao);

    } else {
    resultadoElement.innerHTML = "Por favor, insira números válidos em ambas as entradas.";
    }
}