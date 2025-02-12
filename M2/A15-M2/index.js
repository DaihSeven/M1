//Rest e Spread: Uma Explicação Detalhada com Exemplos em JavaScript
//Os operadores rest e spread em JavaScript são bastante similares na sintaxe, utilizando os três pontos (...), mas possuem funcionalidades distintas e complementares. Ambos são recursos modernos do JavaScript que facilitam a manipulação de arrays e objetos.

/*Operador Rest (...)
O operador rest é usado para transformar um número variável de argumentos em um array. Ele é comumente utilizado em funções para coletar argumentos extras em um único array.
Exemplo:
*/

function soma(...numeros) {
  let resultado = 0;
  for (let numero of numeros) {
    resultado += numero;
  }
  return resultado;
}

console.log(soma(1, 2, 3, 4, 5)); // Saída: 15
/*
Neste exemplo, a função soma utiliza o operador rest para coletar todos os argumentos passados e armazená-los no array numeros. Em seguida, a função soma todos os elementos do array e retorna o resultado.

Outro exemplo, extraindo propriedades de um objeto:
*/
const pessoa = { apelido: 'João', idade: 30, cidade: 'São Paulo', profissao: 'Programador' };
const { apelido, idade, ...rest } = pessoa;

console.log(apelido); // Saída: João
console.log(idade); // Saída: 30
console.log(rest); // Saída: { cidade: 'São Paulo', profissao: 'Programador' }
/*
Aqui, o operador rest coleta todas as propriedades do objeto pessoa que não foram explicitamente atribuídas às variáveis nome e idade, criando um novo objeto com as propriedades restantes.

Operador Spread (...)
O operador spread serve para expandir um iterável (como um array ou um objeto) em seus elementos individuais. Ele é utilizado para criar novos arrays ou objetos a partir de outros, ou para passar elementos de um array como argumentos para uma função.

Exemplo:
*/
const numeros = [1, 2, 3];
const novosNumeros = [...numeros, 4, 5];

console.log(novosNumeros); // Saída: [1, 2, 3, 4, 5]
/*
Neste exemplo, o operador spread espalha os elementos do array numeros em um novo array, que é então concatenado com os números 4 e 5.

Outro exemplo, clonando um array:
*/
const frutas = ['maçã', 'banana', 'laranja'];
const outrasFrutas = [...frutas];

console.log(outrasFrutas); // Saída: ['maçã', 'banana', 'laranja']
/*
Aqui, o operador spread cria uma cópia rasa do array frutas, evitando que modificações em outrasFrutas afetem o array original.

Em resumo:

Rest: Coleta um número variável de argumentos em um array.
Spread: Expande um iterável em seus elementos individuais.
Quando usar cada um:

Rest:
Em funções para coletar argumentos extras.
Em desestruturação de objetos para coletar propriedades restantes.
Spread:
Para criar novos arrays ou objetos a partir de outros.
Para passar elementos de um array como argumentos para uma função.
Para clonar arrays e objetos.
Observação: O operador spread também pode ser usado com objetos, mas a sintaxe e o comportamento são ligeiramente diferentes.

Em suma, o operador rest coleta, enquanto o operador spread espalha.
*/
// Pedir o nome do usuário
let nome = prompt("Digite seu nome:");

// Converter o nome para minúsculas para facilitar a comparação (opcional)
nome = nome.toLowerCase();

// Utilizar a estrutura switch para verificar o nome
switch (nome) {
    case "ruan":
    case "pedro":
    case "katarina":
        console.log("Eu tenho um filho(a) com este nome!");
        break;
    default:
        console.log("Que nome lindo o seu!");
}