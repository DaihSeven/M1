/*
//Você chama o id direto sem precisar # 
const titulo = document.getElementById("titulo");

//Você pode estilizar aqui pelo DOM, mas fica inline, e cada estilização deve ficar em uma linha.
titulo.style.color = '#b2b';
titulo.style.display = 'flex';

//let mudar = getElementById
//let resultado = document.querySelector('span');
*/
const colors = ['#33FF57', '#FF5733'];
const text = ["Aceso", "Apagado"];
let currentIndex = 0;
//let currentColorIndex = 0;
//let currentTextIndex = 0;

function mudarCor() {
    const titulo = document.getElementById("titulo");
    const button = document.getElementById("button");

    //currentColorIndex = (currentColorIndex + 1) % colors.length;
    //currentTextIndex = (currentTextIndex + 1) % text.length;
    currentIndex = (currentIndex + 1) % colors.length;
// Ele faz isso da % para que não vire um loop
    //titulo.style.backgroundColor = colors[currentColorIndex];
    titulo.style.backgroundColor = colors[currentIndex];
    //button.innerText = text[currentTextIndex];
    button.innerText = text[currentIndex];

}

const cores = ['#3357FF', '#F0E68C', '#FF33A6'];
const textos = ['Você clicou no botão!', 'Texto alterado!', 'Mudança de texto bem-sucedida!'];
        
const titulo = document.getElementById('titulo');
const botaoCor = document.getElementById('botaoCor');
const paragrafo = document.getElementById('paragrafo');
const botaoTexto = document.getElementById('botaoTexto');

// Função para mudar a cor de fundo do título
function mudarCor() {
    const corAleatoria = colors[Math.floor(Math.random() * colors.length)];
    titulo.style.backgroundColor = corAleatoria;
}

// Função para mudar o texto do parágrafo
function mudarTexto() {
    const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
    paragrafo.innerText = textoAleatorio;
}

// Adiciona eventos de clique
botaoCor.addEventListener('click', mudarCor);
botaoTexto.addEventListener('click', mudarTexto);
