//1:Armazenar dados é o ato de guardar informações para uso futuro. É como guardar um livro na estante para consultá-lo mais tarde. Quando quero trabalhar com uma informação.
/*function salvarDados() {
    const nome = document.getElementById('nome').value;
    localStorage.setItem('nomeUsuario', nome);
    alert('Dados salvos com sucesso!');
  }*/
/*2: Convernção para nomes de variáveis
Principais Convenções:
Camel Case: A primeira letra da primeira palavra é minúscula e a primeira letra de cada palavra subsequente é maiúscula. É a convenção mais comum em JavaScript.
Exemplo: firstName, lastName, productPrice.
Pascal Case: Similar ao Camel Case, mas a primeira letra de todas as palavras é maiúscula. Geralmente usado para nomes de classes e construtores.
Exemplo: FirstName, LastName, ProductPrice.
Snake Case: Todas as letras são minúsculas e as palavras são separadas por underscores. Comum em outras linguagens, mas menos utilizado em JavaScript.
Exemplo: first_name, last_name, product_price.
헝arian Notation: Adiciona um prefixo ao nome da variável para indicar o tipo de dado. Menos comum em JavaScript moderno.
Exemplo: strFirstName, intAge.*/
/*3:Como fazemos a integração HTML e JS
<script src="./reviv.js">
        alert("Olá, mundo!");
    </script>*/
/*5:Onde colocar pelas melhores práticas:
Arquivo externo 
Por causa do DOM e a estrutura vão estar finalizadas
No final do <body>:
Vantagens:
O script é carregado depois que o DOM estiver completamente construído, evitando erros causados por elementos não existentes.
Garante que o conteúdo da página seja renderizado antes do script ser executado, melhorando a percepção de desempenho.*/
/*6:uma variável é um nome que você dá a um espaço na memória do computador. 
var nomeDoUsuario = "Daiane";
var idadeDoUsuario = 20;
var estaChovendo = false;
console.log("Olá, " + nomeDoUsuario + "! Você tem " + idadeDoUsuario + " anos.");*/
/*7: Tipos de dados
String: Representa uma sequência de caracteres, ou seja, texto. É delimitada por aspas simples (') ou duplas (").
Exemplo: let nome = "João";
Number: Representa números, tanto inteiros quanto decimais.
Exemplo: let idade = 30;, let pi = 3.14;
Boolean: Representa valores lógicos, ou seja, verdadeiro (true) ou falso (false).
Exemplo: let estaChovendo = true;
Null: Representa a ausência intencional de qualquer valor.
Exemplo: let valor = null;
Undefined: Indica que uma variável foi declarada, mas ainda não recebeu um valor.
Exemplo: let x; (O valor de x será undefined);
Symbol: Representa um valor único e imutável, frequentemente usado como identificador.
BigInt: Representa números inteiros maiores do que o que o tipo Number pode armazenar.*/
/* 8: um algoritmo é uma sequência de comandos que o computador executa para realizar uma determinada ação. Por exemplo, um algoritmo pode calcular a média de um conjunto de números, ordenar uma lista de nomes ou verificar se um número é primo.

Exemplo: Calculando a Média
function calcularMedia(numeros) {
  var soma = 0;

  for (var i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  const media = soma / numeros.length;

  return media;
}

const notas = [8, 7, 9, 10];
const mediaFinal = calcularMedia(notas);
console.log("A média é:", mediaFinal);
Exemplo Completo: Cálculo da Média de Notas

Definir o Problema: Calcular a média das notas dos alunos.
Analisar e Especificar os Dados de Entrada: Notas dos alunos.
Definir o Resultado Desejado: A média das notas.
Desenvolver o Algoritmo:
Passo 1: Receba as notas dos alunos.
Passo 2: Some todas as notas.
Passo 3: Divida a soma pelo número total de notas.
Passo 4: Exiba a média.
Testar o Algoritmo: Verifique com diferentes conjuntos de notas.
Refinar e Otimizar: Garanta que o algoritmo é eficiente e claro.
Documentar o Algoritmo: Escreva comentários e explicações.*/
/*9: o que são condicionais:
Condicionais em JavaScript: Tomando Decisões no Seu Código
Uma condicional é uma estrutura de controle que permite que seu programa tome decisões com base em determinadas condições. Ou seja, seu código pode executar diferentes blocos de instruções dependendo se uma determinada expressão é verdadeira ou falsa.

A Estrutura if
A estrutura mais básica para criar condicionais em JavaScript é o if. Ela funciona da seguinte forma:
var idade = 20;
if (idade =>18) {
console.log("Tem mais de 18 anos"!);
  
}*/
/*10: Quais são os operadores mais usados
Operadores Lógicos
&&: E lógico (ambas as condições devem ser verdadeiras)
||: Ou lógico (pelo menos uma das condições deve ser verdadeira)
!: Negação (inverte o valor da condição)
Operadores de Comparação
==: Igual a (compara o valor, mas não o tipo)
===: Estritamente igual a (compara o valor e o tipo)
!=: Diferente de
!==: Estritamente diferente de
>: Maior que
<: Menor que
>=: Maior ou igual a
<=: Menor ou igual a
var idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}*/
/*1)Entender o problema:
2)Definir as entradas;
3)Definir as saídas;*/
//entrada
var numeroString = prompt("digite um número: ");
var nomeUsuario = prompt("digite seu nome: ");
var nome = prompt

//processando
var numero = parseInt(numeroString);
var numeroLetras = nomeUsuario.length;

//saídas
console.log(numero);

/*Resolvendo o Mistério da Escola com JavaScript
Entendendo o Problema:

Precisamos criar um programa em JavaScript que:

Armazene as três falas dos suspeitos.
Conte a quantidade de letras em cada fala.
Identifique a fala com a maior quantidade de letras.
Exiba o número do suspeito com a fala mais longa no console.

// Falas de entrada
const falas = [
    "Não sou eu!",
    "Eu tentei te ajudar desde o início!",
    "Já pensou que o monstro pode ser controlado?"
];

// contagem das letras
function contarLetras(frase) {
    return frase.length;
}

// Encontrar a fala com mais letras e seu índice
var maiorQuantidadeDeLetras = 0;
var suspeitoComMaisLetras = 0;

for (let i = 0; i < falas.length; i++) {
    const quantidadeDeLetras = contarLetras(falas[i]);
    if (quantidadeDeLetras > maiorQuantidadeDeLetras) {
        maiorQuantidadeDeLetras = quantidadeDeLetras;
        suspeitoComMaisLetras = i + 1; // Adicionamos 1 para o índice começar em 1
    }
}

// Saída
console.log(`O suspeito ${suspeitoComMaisLetras} tem a fala mais longa.`);
*/