// EXERCÍCIOS DE CALLBACKS

// 1º Escreva uma função anônima que receba um nome como argumento e uma função de callback. A função de callback deve ser responsável por exibir a mensagem de saudação.
/*
const saudacao = function (nome, callback) {
    callback(nome);
}

saudacao("Daiane", (nome) => {
    console.log(`Olá ${nome}, seja bem vindo(a) ao meu site!`);
});
*/
// 2º Crie uma função chamada operar, que receba 2 números e uma função de callback que realize uma operação matemática (Soma, Subtração, Multiplicação ou Divisão). A função operar deve passar os dois números para a callback e retornar o resultado. Adicione uma condição caso na operação divisão o usuário tente dividir por zero retornar uma mensagem "Impossível Dividir por zero".
// Função principal que opera com dois números e uma callback
//Sem callback
/*
function operar(num1, num2, operacao) {
    switch (operacao.toLowerCase()) {
        case 'soma':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            if (num2 === 0) {
                throw new Error("Impossível Dividir por zero");
            }
            return num1 / num2;
        default:
            throw new Error("Operação inválida");
    }
}

// Obter entrada do usuário
const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
const operacao = prompt("Digite a operação (soma, subtracao, multiplicacao, divisao): ");

try {
    const resultado = operar(num1, num2, operacao);
    alert(`O resultado da operação ${operacao} é: ${resultado}`);
} catch (error) {
    alert(error.message);
}
*/

//COM CALLBACKS
function operar(num1, num2, callback) {
    try {
        return callback(num1, num2);
    } catch (error) {
        return error.message;
    }
}

// Funções para realizar as operações matemáticas, com retorno de erro ao tentar dividir por 0(zero)
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Impossível Dividir por zero";

// Função para selecionar a operação, com retorno de erro se houver
function selecionarOperacao(operacao) {
    switch (operacao.toLowerCase()) {
        case 'soma':
            return somar;
        case 'subtracao':
            return subtrair;
        case 'multiplicacao':
            return multiplicar;
        case 'divisao':
            return dividir;
        default:
            throw new Error("Operação inválida");
    }
}

// Obter entrada do usuário, pede a operação antes, fica mais lógico
const operacao = prompt("Digite a operação (soma, subtracao, multiplicacao, divisao): ");
const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));


try {
    const resultado = operar(num1, num2, selecionarOperacao(operacao));
    alert(`O resultado da operação ${operacao} é: ${resultado}`);
} catch (error) {
    alert(error.message);
}



// 3º Implemente uma função chamada filtrarElementos que receba um array de números e uma função de callback. A função deve retornar um novo array contendo apenas os elementos que a callback considerar como "válidos".

// 4º Implemente uma função executarAsync que simula uma operação assíncrona usando setTimeout. A função deve receber um número e uma função de callback. O número deve ser multiplicado por 2 após um atraso de 2 segundos, e o resultado deve ser passado para a callback.
