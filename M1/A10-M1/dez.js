// Crie um sistema que verifique o saldo em conta e permita que o usuario finalize a compra
// apenas se o valor do produto for menor ou igual ao saldo em conta
var saldoConta = 30;
var valorProduto = 10;

if(valorProduto <= saldoConta){
 console.log("compra finalizada")
}else{
  console.log("voce nao tem saldo para efetuar a compra")
}

// Crie um sistema que exiba uma mensagem no console sugerindo abaixar o volume do fone 
// apenas se o valor do volume for superior a 6

var volumeUsuario = 6;
if(volumeUsuario > 6){
   console.log("abaixe o volume para nao ter problemas auditivos")
}else{
   console.log("volume adequado")
}

if(volumeUsuario >= 7){
    console.log("abaixe o volume para nao ter problemas auditivos")
 }else{
    console.log("volume adequado")
 }

// Crie um sistema que permita que o usuario finalize uma compra apenas se seu saldo for maior
// ou igual ao valor da compra, esse sistema tambem deve diminuir seu saldo se a compra for efetuada
// e mostre o saldo atualizado no console

var saldoConta = 30;
var valorProduto = 10;
 
if(saldoConta >= valorProduto){
    var saldoAtual = saldoConta - valorProduto;
    console.log("compra finalizada" + " saldo atual: " + saldoAtual)
}else{
  console.log("voce nao tem saldo para efetuar a compra")
}

// O que é uma bifurcação?
// 2 caminhos

// O que é uma trifurcação?
// 3 caminhos diferentes

var numeroPorta = 1;

if(numeroPorta == 1){
    console.log("nao conseguiu entrar");
}else if(numeroPorta == 2){
    console.log("voce passou")
}else{
    console.log("voce escolheu a porta errada, tenta de novo")
}

var presente15 = "viagem";

if(presente15 == "viagem"){
    console.log("ganhou a viagem")
}else if(presente15 == "festa"){
  console.log("ganhou a festa")
}else if(presente15 == "dinheiro"){
  console.log("ganhou uma bolada")
}else{
    console.log("chata vai ficar sem nada")
}
 
// quais os tipos de dados que podemos ter?
// string - texto
// number - numeros
// boolean - true / false

// quais sao as operações que podemos executar?
// numericos - somar, subtrair, multiplicar e dividir
// textos - contatenar(somar)
// booleanos - multiplas condições

// OPERADORES BOOLEANOS

var idade = 20;
var nome = "Daiane"
// AND(E) -> &&
// se a idade do usuario for MAIOR ou IGUAL a 18 anos E o nome for Daiane, faça...
if(idade >= 18 && nome == "Daiane"){
  console.log("condições verdadeiras")
}else{
    console.log("condições falsas")
}

// if(falso && falso) -> a condição entra no else
// if(verdadeiro && falso) -> a condição entra no else
// if(falso && verdadeiro) -> a condição entra no else
// if(verdadeiro && verdadeiro) -> a condição entra no if

// OR(OU) -> ||
var sobremesa = "pudim"

if(sobremesa == "banoffe" || sobremesa == "pudim"){
    console.log("voce comeu um docinho gostoso de sobremasa")
}else{
    console.log("voce nao comeu um docinho gostoso")
}

// if(falso || falso) -> a condição entra no else
// if(verdadeiro || falso) -> a condição entra no if
// if(falso || verdadeiro) -> a condição entra no if
// if(verdadeiro || verdadeiro) -> a condição entra no if
 
// PRATICANDO

// Crie um sistema que verifique se temos disponibilidade para ir em um role de amigos.
// É para dizer que vamos no role SE fosse de uber E se o role fosse perto.

// var transporte = "uber";
// var local = "longe";

// if(transporte == "uber" && local == "perto"){
//     console.log("vamos rolezar amigos")
// }else{
//     console.log("nao tenho disponibilidade de rolezar aumigos")
// }

// Crie um sistema que verifique se temos disponibilidade para ir em um role de amigos.
// É para dizer que vamos no role SE for de uber OU o local for perto para ir de transporte publico

// var transporte = "transporte publico";
// var local = "perto";

// if(transporte == "uber" || local == "perto"){
//     console.log("vamos rolezar amigos")
// }else{
//     console.log("nao tenho disponibilidade de rolezar aumigos")
// }

// Crie um sistema que verifique se temos disponibilidade para ir em um role de amigos.
// É para dizer que vamos no role SE for perto de casa E tanto faz se for de uber OU transporte 
// publico

var transporte = "pézin que Deus nos deu";
var local = "perto";
(2 + 4 * 8);
(2 + (4 * 8));

//       V                 V
// if((2 + 2) == 4 && (3 * 3) == 9) -> if

//          F              V
// if((2 + 2) == 5 && (3 * 3) == 9) -> else


//          V             V
// if((2 + 2) == 4 || (3 * 3) == 9) -> if

//       F                 F
// if((2 + 2) == 5 || (3 * 3) == 4) -> else


//     verdadeiro    E  (verdadeiro) -> entrar no if
//     verdadeiro    E  (falso) -> entrar no else

// sem o ()
//     verdadeiro    E falso || verdadeiro -> entra no else
//     verdadeiro    E (verdadeiro || falso) -> entra no else

if(local == "perto" && (transporte == "uber" || transporte == "transporte publico")){
    console.log("vamos rolezar amigos")
}else{
    console.log("nao tenho disponibilidade de rolezar aumigos")
}
 
var numero = prompt("digite um numero");
// para calcular ou comparar esse numero com outros precisa haver a conversão porque por padrao prompt armazena uma string

if(Number(numero) == 10) {

}