// variaveis são gavetas que guardam INFORMAÇÕES / DADOS

// let / const
let nome = "Beatriz";

// reatribuição -> substituição
nome = 12;

// caracteristicas de uma variavel é ARMAZENAR APENAS UM UNICO VALOR

// colchete representar um CONJUNTO DE VALORES / DADOS /INFORMAÇÕES
// CONJUNTO -> AGRUPAR valores da mesma categoria
let idadesEstudante = [23,20,19];

let idadeOdilon = 23;
let idadeRafael = 20;
let idadeRosimeire = 19;

// CONJUNTO / VETORES / ARRAY

// como criamos um agrupamento de valores
// como criamos um conjunto de valores
// como criamos um vetor
// como criamos um array

// o que é um array -> é um conjunto ou agrupamento de valores(lista)
//   variavel          [elemento | item]
let idadesEstudante1 = [20,23,19]

// qual o primeiro elemento do array idadeEstudante?
// 20

// qual o terceiro item do vetor idadeEstudante1?
// 19

// cada elemento tem uma senha ao entrar
// nome da senha -> INDICE/ INDEX/ POSIÇÃO
//      senha        =  0 ,1 , 2
let idadesEstudante2 = [20,23,19]

// qual item esta na POSIÇÃO de numero 2 do array idadesEstudante2?
// 19

console.log(idadesEstudante2)

// O ARRAY tem METODOS(FUNÇÕES) NATIVOS

// push -> Adicionar um elemento no FINAL do array
idadesEstudante2.push(10)
console.log("utilizando push " + idadesEstudante2)

// pop -> Remover o ultimo elemento do array
idadesEstudante2.pop();
console.log("utilizando pop " + idadesEstudante2)

// unshift -> Adicionar um elemento no INICIO do array
idadesEstudante2.unshift(90);
console.log(idadesEstudante2);

// shift -> Remover o primeiro elemento do array
idadesEstudante2.shift();
console.log(idadesEstudante2);

// let nomeEstudantes = [];

// function adicionarEstudante(nome){
//   // chamar a variavel
//   nomeEstudantes.push(nome)
// }

// // hospital lista de transplantes
// if(urgente === true){
//     lista.unshift(pessoa)
// }{
//   lista.push(pessoa)
// }