/*Função
É um procedimento de JavaScript que executa uma tarefa ou calcula um valor. Para usar uma função, é preciso defini-la em algum lugar no escopo do qual se quiser chamá-la. 
Função anônima
É uma função de expressão que não tem um nome identificador. O nome da função pode ser omitido em expressões de funções para criar funções anônimas. 
As funções anônimas são frequentemente utilizadas em contextos onde funções são usadas como valores. 
*/

function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Daiane"));

//Função anônima: começa com const um valor não mutável, se usa uma vez só, e não recebe nome, é usada como elemento/ valor
const saudacaoAnonima = function(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacaoAnonima("Daiane"));
