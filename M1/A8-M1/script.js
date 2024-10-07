// var nome = "Bea";

// console.log(nome);

// qual o TIPO da variavel 
// nome da variavel
// sinal de igual = recebendo
// var idade = 24

// CONVENÇÕES -> BOAS PRATICAS DE PROGRAMAÇÃO
// cammelCase -> nomealuno -> nomeAluno | valorUm 
// snake_case -> nomealuno -> nome_aluno | valor_um


// aspas duplas " "
// aspas simples ' '
var nome = "Beatriz"
var batatinha = 'ingrediente batatinha'


// reatribuindo valores -> pegar uma variavel JÁ EXISTENTE e alterar seu valor
nome = "Daniel"
// console.log(nome);


// como saber onde esta declarando e onde esta reatribuindo?
// declarção de variavel começa com var
// reatribuição do valor da variavel começa com o nome da variavel
var nome = "Daniel"
nome = "Daniel"

// TIPOS DE VARIAVEIS 

// number - numerico - INTEIRO - DECIMAL - CONTAS - POSITIVOS E NEGATIVOS
var idade = 24
var numeroDecimal = 12.2
var resultado = idade + numeroDecimal

// quando somamos uma string com um number = string
console.log(idade + "12.2")
// 2412.2

// OPERAÇÕES NUMERICAS

// multiplicação
console.log(idade * 2)

// divisao
console.log(idade/30);

// soma
console.log(idade + 3);

// subtração
console.log(idade - 70)



// string - textual - TEXTOS - PALAVRAS - CARACTERES
var titulo = 'Aula 8 - M1'
// espaço é um caracter
var espaco = " ";

// OPERAÇÃO 
console.log(titulo + " beatriz")
// Aula 8 - M1 beatriz

// boolean - VERDADEIRO OU FALSO
var statusO = true

// typeof - dizer qual o tipo da variavel
// console.log(typeof idade)

// Crie um sistema que mostre no console quantos dias faltam para
// terminar a semana

// 1 = dom / 2 = seg / 3 = ter / 4 = qua / 5 = qui / 6 = sex / 7 = sab
var diaAtual = 3
var totalDiasSemana = 7
var resultadoDias = totalDiasSemana - diaAtual
console.log("Faltam " + resultadoDias + " para terminar a semana")

// diferença de , e +
// quando utilizamos virgula(,) estamos colocando varios valores EX: maça banana pera
// quando utilizamos mais(+) estamos somando/concatenando valores EX: "maçabananapera"

// quantos reais faltam para conseguir comprar a blusa
var blusa = 40
var saldo = 35
var resultado = blusa - saldo
console.log("Faltam " + resultado + " reais");

// Falta/Intervalo/Diferença - subtração
// Quando queremos calcular quanto falta - estamos calculando intervalos
// subtração - diferença entre valores
// por isso é necessario um valor total e o valor de comparação

//atividade 1
var notaJoao = "9";
var notaRyan = 10;
var somaNotas = Number(notaJoao) + notaRyan;
console.log("A soma das notas é:", somaNotas);
//atividade idade
var anoDeNascimento = 2004;
var anoAtual = 2024;
var idade = anoAtual - anoDeNascimento;
console.log("A minha idade atual é " + idade);