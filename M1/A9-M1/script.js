// camelCase
var primeiroNome = "Daiane";

// snack_case
var segundo_nome = "Barbosa";

// quais os tipos de dados que podemos ter?
// string - texto
// number - numeros
// boolean - true / false

// quais sao as operações que podemos executar?
// numericos - somar, subtrair, multiplicar e dividir
// textos - contatenar(somar)

// CONDIÇÕES - SE
// se é uma condição para que algo aconteça no código

// ESTRUTURA DE CONTROLE
// CONDIÇÕES - if/else

// portugol
// se(condição){
//  comando a ser executado caso a condição seja VERDADEIRA
// }se não{
//     comando a ser executado caso a condição seja FALSA
// }

// se(3 > 2){
//  TRUE 
//  ISJAIDJSIAJDPSJAPODJSAOPJ
//   escreva na tela É MENOR!
// }se não {
//   FALSE
//   escreva na tela É MAIOR!
// }

// if/else
if(3 > 2){
    // true
    console.log("é menor")
}else{
    // false
    console.log("é maior")
}


var nome = "Daiane";
var saudavel = false;

// 1(=) sinal de igual - está recebendo valor
// 2(==) sinais de igual - está comparando valores
// 3(===) sinais de igual -

// OPERAÇÕES BOOLEANAS

// igual a ==
if(saudavel == false){
    // true
    console.log("este usuario é muito saudavel")
}else{
    // false
    console.log("esta a beira da morte!!")
}


var blusinha = 400;
var tenis = 400;
// Verifique se o valor contido na blusinha é menor que o valor contido no tenis?
// a pergunta é '400 é menor OU igual a 400?'
if(blusinha < tenis){
    console.log("O valor da blusa é: " + blusinha + " sendo assim a blusa é mais barata do que o tenis");
}else{
    console.log("O valor da blusa é: " + blusinha + " sendo assim a blusa é mais cara do que o tenis");
}
var blusinha = 10;
var tenis = 400;
//verifique se o valor contido na blusinha é menor que o valor contindo no tenis
if(blusinha < tenis){
    console.log("O valor contido na blusinha é" + blusinha + " menor que o valor contido no tenis" + tenis + "!");
} else{
    console.log("O valor contido na blusinha é" + blusinha + " maior que o valor contido no tenis" + tenis + "!");
}

//EXERCÍCIOS
//Sistema que permite o usuário comer a sobremesa só se tiver comido todo o prato principal
var nome = 'Daiane';
var pratoPrincipal = false;
var sobremesa = true;

if(pratoPrincipal == true){
    console.log()
} else{
    console.log
}

//Atividades:

// Crie um sistema que permita o usuario comprar uma televisão
// apenas se ela tiver MAIS que 32 polegadas e seu valor seja ATÉ 1900
// (comida == true && saudavel == true)

// Crie um sistema que verifique o saldo em conta e permita que o usuario finalize a compra
// apenas se o valor do produto for maior ou igual ao saldo em conta

// Crie um sistema que exiba uma mensagem no console sugerindo abaixar o volume do fone 
// apenas se o valor do volume for superior a 6

// Crie um sistema que permita que o usuario finalize uma compra apenas se seu saldo for maior
// ou igual ao valor da compra, esse sistema tambem deve diminuir seu saldo se a compra for efetuada
// e mostre o saldo atualizado no console