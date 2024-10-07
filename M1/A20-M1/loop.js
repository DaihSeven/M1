// WHILE VAI VERIFICAR E DEPOIS EXECUTAR
// let inscrito = prompt("voce é inscrito no canal?")

// // enquanto nao for inscrito pedir para se inscrever
// while(inscrito !== "sim"){
//     inscrito = prompt("digite sim para se inscrever no canal")
// }

// let nome = prompt("digite seu nome para utilizar o nosso site")

// while(nome == ""){
//     nome = prompt("voce precisa digitar seu nome para utilizar o nosso site")
// }


// DO WHILE PRIMEIRO VAI FAZER 1 UMA UNICA VEZ E DEPOIS VERIFICAR 
// PARA CONTINUAR EXECUTANDO

// let consentimento;

// do{
//     consentimento = prompt("digite sim para consentir o compartilhamento dos seus dados");
// }while(consentimento !== "sim")

// FOR - PARA     0          1          2
// let listName = ["Beatriz", "Daniel", "Joao"];
// console.log(listName[0])
// posicao++
// posicao = posicao + 1

// PERCORRER UM ARRAY -> APRESENTAR TODOS OS VALORES DENTRO DE UM ARRAY
// for(var posicao = 0; posicao < listName.length; posicao++){
//   console.log(listName[posicao])
// }

// let perguntas = ["qual o nome do distrito federal", "quantas estrelas tem no ceu", "qual a distancia do Brasil pra China"];

// for(var i = 0; i < perguntas.length; i++){
//     console.log(`${perguntas[i]} ?`);
// }

// array conjunto de valores
// simples 
let listName = [
    "Beatriz", 
    "Daniel",
     "Joao"
];


// porque utilizar o looping FOR para apresentar todos os dados de um array 
/*
for: Ideal para iterações com um número conhecido de repetições e quando você precisa de um contador para controlar as iterações.
while: Ideal para iterações com uma condição de parada que pode variar, quando você não sabe exatamente quantas vezes o bloco de código será executado e a condição de parada depende de algum cálculo ou evento.
do while: Ideal quando você precisa garantir que o bloco de código seja executado pelo menos uma vez.
*/
// Utilizando for
for (let i = 1; i <= 10; i++) {
    console.log("Com for:", i);
}
  
// Utilizando while
let j = 1;
while (j <= 10) {
    console.log("Com while:", j);
    j++;
}

// for: Imprime os números de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
  
// while: Continua enquanto um número aleatório for menor que 5
let numeroAleatorio;
do {
    numeroAleatorio = Math.random() * 10;
    console.log(numeroAleatorio);
} while (numeroAleatorio < 5);