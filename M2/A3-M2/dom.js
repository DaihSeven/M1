/*
DOM (Document Object Model) é uma interface de programação para documentos HTML e XML. Ele representa a estrutura do documento como uma árvore de nós, onde cada nó é uma parte do documento, como um elemento, atributo ou texto.

Como usar o DOM:

Selecionar Elementos: Você pode selecionar elementos da página usando métodos como getElementById, getElementsByClassName, querySelector, etc.


const elemento = document.getElementById('meuElemento');
Modificar Conteúdo: Altere o conteúdo de um elemento.

elemento.innerHTML = "Novo conteúdo";
Adicionar ou Remover Classes: Adicione ou remova classes de elementos.

elemento.classList.add('novaClasse');
elemento.classList.remove('antigaClasse');
Manipular Atributos: Adicione ou remova atributos de elementos.

elemento.setAttribute('data-custom', 'valor');
elemento.removeAttribute('data-custom');
Adicionar Event Listeners: Adicione ouvintes de eventos para interatividade.


elemento.addEventListener('click', function() {
    alert('Elemento clicado!');
});
Criar e Inserir Novos Elementos: Crie novos elementos e insira-os no DOM.

const novoElemento = document.createElement('div');
novoElemento.textContent = 'Eu sou um novo elemento';
document.body.appendChild(novoElemento);
O DOM é essencial para manipular e interagir dinamicamente com os conteúdos das páginas web.
*/
//Criar uma calculadora que contenha 3 inputs e 1 botão, 2 inputs para capturar os valores numéricos e 1 para capturar a operação. Faça o cálculo e apresente o resultado na tela.
let n1 = document.querySelector('#n1');
let n2 = document.querySelector('#n2');
let resultado = document.querySelector('span');

function somar() {
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}

function subtrair() {
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
}

function dividir() {
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
}

function multiplicar() {
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
}