/*Um callback é uma função que é passada como argumento para outra função e é executada depois que a função principal termina sua operação ou atinge um ponto específico. Callbacks são amplamente utilizados em programação assíncrona, como no JavaScript, para garantir que uma função seja executada após outra função ter terminado, sem bloquear o restante do código.

Como funciona o Callback?

Quando uma função é executada, você pode querer que uma ação adicional seja realizada depois que ela terminar. Em vez de colocar esse código diretamente na função, você pode passar uma função callback que será chamada no momento adequado.

Crie um programa utilizando  "let" e "const" em JavaScript:
 Crie um programa que calcule a média de notas de uma turma, armazenando as notas em variáveis usando "let" e declarando constantes utilizando "const" para valores fixos, como o número máximo de notas.

[Para ir além🛸]
Utilize o prompt para o usuário inserir as notas.

*/
const somarMedia = function (valor1, valor2, valor3, valor4) {
    alert((valor1 + valor2 + valor3 + valor4) / 4)
}

function media(funcaoParaSomar) {
    let nota1 = Number(prompt("Digite a sua nota 1:"))
    let nota2 = Number(prompt("Digite a sua nota 2:"))
    let nota3 = Number(prompt("Digite a sua nota 3:"))
    let nota4 = Number(prompt("Digite a sua nota 4:"))
    funcaoParaSomar(nota1, nota2, nota3, nota4)
}

media(somarMedia)

/*
// Função anônima que recebe um nome e uma função de callback
(function(nome, callback) {
    // Dentro da função, você pode realizar alguma lógica
    // Por exemplo, criar uma mensagem personalizada:
    let mensagem = `Olá, ${nome}! Seja bem-vindo(a).`;
  
    // Chamando a função de callback, passando a mensagem como argumento
    callback(mensagem);
  })('Daiane', function(msg) {
    console.log(msg); // Exibe a mensagem no console
  });


  function saudarPersonalizado(callback) {
    let nome = prompt("Qual o seu nome?");
    let mensagem = `Olá, ${nome}! Seja bem-vindo(a) ao nosso site.`;
  
    callback(mensagem);
  }
  
  // Exemplo de uso:
  saudarPersonalizado(function(msg) {
    console.log(msg); // Exibe a mensagem no console
  });
  
  // Outro exemplo, exibindo a mensagem em um elemento HTML com id "resultado":
  saudarPersonalizado(function(msg) {
    document.getElementById("resultado").textContent = msg;
  });
  */

  /*
  function saudarPersonalizado(callback) {
  let nome = prompt("Qual o seu nome?");
  let idade = prompt("Qual a sua idade?");
  let mensagem = `Olá, ${nome}! Seja bem-vindo(a). Você tem ${idade} anos.`;

  callback(mensagem);
} */

  const functionAnonima = (nome, funcao) => {
    funcao(nome);
  }

  function exibirMensagem(nome) {
    console.log("Olá $")
  }