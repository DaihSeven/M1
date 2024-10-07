// tipos de dados?
// string | number | boolean

// tipos de variaveis?
// var | let | const

// quando utilizar var?
// em um contexto global 
// visivel em qualquer lugar do arquivo

// quando utilizar let?
// em um contexto local
// visivel apenas no escopo que foi criada

// quando utilizar const?
// em um contexto imutavel 

// EX GLOBAL
// var nome = "Beatriz";

// console.log(nome);

// function showName(){
//     console.log(nome)
// }

// showName()

// EX LOCAL
// function showName(){
//     let nome = "Beatriz local"
//     console.log(nome);
// }

// showName();
// console.log(nome);

// EX CONST
// function showName(){
//     var nomeUsuario = "Beatriz";
//     nomeUsuario = "Daniel";
//     console.log(nomeUsuario)
// }

// showName();
// console.log(nomeUsuario);

// var tipo de variavel que todos podem acessar e alterar
// criaram 2 vertentes do var 

// 1 -> podemos acessar apenas dentro de um bloco de código e alterar
// 2 -> podemos acessar apenas dentro de um bloco de código e nao alterar

// Uma empresa solicitou um sistema que registrasse os dados
// de um usuario onde a primeira letra do seu nome tem que ser obrigatóriamente maiuscula.



















// Uma empresa solicitou um sistema que mostrasse na tela o salario do 
// funcionario com 10% de desconto dos impostos. Esse salario com
// desconto deve ser apresentado na tela.
// EX: passado salario de 1000 reais / deve aparecer na tela 900 reais

function descontoSalario(salario, desconto){
    let descontoString = `0.${desconto}`;
    return salario - (salario * parseFloat(descontoString));
}

// Uma empresa solicitou um sistema que mostrasse o salario do 
// funcionario baseado no desconto passado. Esse salario com 
// desconto deve ser apresentado na tela.
// EX: passado salario de 1000 reais e desconto de 12% / deve aparecer na tela 880
//console.log(descontoSalario(1000, 0.12));
console.log(descontoSalario(1000, 24));
// salario com desconto 900

// Uma empresa solicitou um sistema que VERIFICASSE se seus funcionarios poderiam ou nao
// se candidatar a cargos de gerencia. Para o funcionario poder se inscrever ele tem que ter 
// no minimo 25 anos E estar trabalhando na empresa a mais de 2 anos. Caso o funcionario
// completar esses 2 requisitos o sistema deve retornar uma mensagem de aprovação, caso contrario
// uma mensagem de reprovação.

function verificarCandidatura(nomeUsuario,idadeFuncionario,tempoTrabalho){
    if(idadeFuncionario >= 25 && tempoTrabalho > 2){
       return `Funcionario ${nomeUsuario} aprovado para inscrição`;
    }else{
        return `Funcionario ${nomeUsuario} reprovado para inscrição`
    }
}

var nome = prompt("digite seu nome")
var idade = prompt("digite sua idade")
var tempo = prompt("digite quantos anos esta na empresa")

console.log(verificarCandidatura(nome,idade, tempo))

// Uma empresa solicitou um sistema que calculasse a média de idade dos funcionarios por setor
// os requisitos para criar este sistema é que ele receba 4 idades e o nome do setor operacional.
// Ao final o sistema deve retornar o resultado e apresenta-lo no console/alert

function calcularMedia(age1, age2, age3, age4, nomeSetor){
    var valorMedia = (age1 + age2 + age3 + age4) / 4;
    return `O setor ${nomeSetor} tem uma media de idade de ${valorMedia}`
}

var idade1 = prompt("digite a primeira idade")
var idade2 = prompt("digite a segunda idade")
var idade3 = prompt("digite a terceira idade")
var idade4 = prompt("digite a quarta idade")
var setor = prompt("digite o setor da empresa")

console.log(calcularMedia(parseInt(idade1), parseInt(idade2), parseInt(idade3), parseInt(idade4), setor))

// RECURSO QUE VIMOS EM AULA NECESSARIO PARA RESOLUÇÃO
// funçoes -> function
// parametros -> params
// argumentos -> args
// retorno -> return
// variaveis -> let | const

// ------------------------------------------
// Tipos de dados?
// number | boolean | string
let idade = 23;
let status = true;
let nome = "Beatriz";

// tipos de variaveis?
// var | let | const 
var escopoGlobal = "todas tem acesso e podem mudar meu conteudo";
let escopoLocalAlteravel = "apenas quem esta dentro do mesmo bloco de código que eu pode me ver e alterar";
const escopoLocalImutavel = "apenas quem esta dentro do mesmo bloco de código que eu pode me ver e não sou alteravel";

var nome = "Beatriz";
function showName(){
    console.log(nome)
}

showName()
console.log(nome)


// LET -> Escopo LOCAL 
// essa variavel visivel e alteravel apenas dentro de um bloco de código
// quando utilizar?
// quando queremos declarar uma variavel que será alteravel e visivel somente 
// dentro do bloco de código que foi criada

function showName2(){
    // variavel nome nao existe fora dessa funçao
    let nome = "Daniel"
    nome = "Brendinha"
    console.log(nome)
}

showName2()

// CONST -> É uma variavel Constante OU SEJA NAO MUDA Escopo LOCAL
// essa variavel visivel e imutavel apenas dentro de um bloco de código

function showName(){
    // variavel nome nao existe fora dessa funçao e nao pode ser alterada 
    const nome = "Daniel";
    console.log(nome)
}

showName()

// quero criar uma variavel status logado
let statusLogado = true;
// informações do perfil do usuario 