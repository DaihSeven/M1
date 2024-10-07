// Função -> ação/verbo -> ação que executar varias vezes
// Exemplo de vida 
// Andar 
// chamo a função andar, dou um destino 

// café -> colocar uma panela de agua no fogo, copinho, coloca
// o coador, coloca o café, coloca a agua, bate, coloca um acuçar 

// maquina de café -> vai executar automaticamente todos os passos
// que antes eram feitos manualmente

// PRIMEIRO PASSO - CRIAR
// declaração de variaveis e funções
// declaração de variavel serve para armazenar valores/dados
// declaração de funções serve para definir uma ação que será executada
// varias vezes 

// SEGUNDO PASSO - UTILIZAR
// acessar variaveis 
// chamar funções

// entrada de dados | processamento | saída

// ESTRUTURA DE UMA FUNÇÃO
// o que é -> function
// o que a função faz -> descrição BREVE do que a função nameFunction/somar
// quais são os valores necessarios para sua execução PARAMETROS
// o que ela fará -> bloco de código
// o que ela irá retornar -> return

// porque nao utilizar essa funçao:
// os valores number1 e number2 nao sao variaveis/ nao mudam
// function somar(){
//     var number1 = 1;
//     var number2 = 3;
//     return numbe1 + number2
// }

// porque nao utilizar essa funçao:
// apenas o usuario vai poder utilizar esta funçao
// function somar(){
//     var number1 = prompt("digite um numero");
//     var number2 = prompt("digite outro numero");;
//     return number1 + number2;
// }

//                 parametros
// function somar(number1, number2){
//     return number1 + number2
// }

// number1 / number2 
// indicando os valores armazenados


//                argumento
// console.log(somar(10,3));

// melhor utilização
// var num1 =  prompt("digite um numero");
// var num2 =  prompt("digite um numero");
// somar(num1, num2);

// ------------------------------------------------
// function subtrair(number1, number2){
//     return number1 - number2
// }

// var resultado = subtrair(23,2);
// console.log(resultado)

// --------------------------------------------
// 15min
// Uma empresa solicitou um sistema que calcule quanto falta para atingir suas
// metas. Os requisitos para criar este sistema é que ele RECEBA o valor 
// final da meta e o valor atual da meta. Ao final o sistema deve RETORNAR 
// o resultado e apresenta-lo no console/alert


function calcularMeta(metaFinal, metaAtual){
    return metaFinal - metaAtual;
}
console.log(calcularMeta(10,3));

var metaFinalUsuario = prompt("digite a meta final");
var metaAtualUsuario = prompt("digite a meta atual");
console.log(calcularMeta(parseInt(metaFinalUsuario), parseInt(metaAtualUsuario)));


// Uma empresa solicitou um sistema que VERIFICASSE se seus funcionarios poderiam ou nao
// se candidatar a cargos de gerencia. Para o funcionario poder se inscrever ele tem que ter 
// no minimo 25 anos e estar trabalhando na empresa a mais de 2 anos. Caso o funcionario
// completar esses 2 requisitos o sistema deve retornar uma mensagem de aprovação, caso contrario
// uma mensagem de reprovação.

// Uma empresa solicitou um sistema que calculasse a média de idade dos funcionarios por setor
// os requisitos para criar este sistema é que ele receba 4 idades e o nome do setor operacional.
// Ao final o sistema deve retornar o resultado e apresenta-lo no console/alert