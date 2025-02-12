// Banco de Dados Mocando
let perguntas = [];

// C - Create
function criarPergunta(pergunta) {
  perguntas.push(pergunta);
  console.log("Pergunta adicionada:", pergunta);
  console.log("Lista de perguntas:", perguntas);
}

// R - Read
function lerPerguntas() {
  console.log("Lista de todas as perguntas:", perguntas);
}

function lePerguntaPorIndice(indice) {
  if (indice >= 0 && indice < perguntas.length) {
    return `Pergunta encontrada: ${perguntas[indice]}`;
  } else {
    console.error("PERGUNTA NÃO ENCONTRADA");
    return null; // Retorna null caso não encontre
  }
}

// U - Update
function atualizarPergunta(indice, novaPergunta) {
  if (indice >= 0 && indice < perguntas.length) {
    perguntas[indice] = novaPergunta;
    console.log(`Pergunta na posição ${indice} atualizada para: ${novaPergunta}`);
  } else {
    console.error("Índice inválido. Pergunta não encontrada para atualizar.");
  }
}

// D - Delete
function deletarPergunta(indice) {
  if (indice >= 0 && indice < perguntas.length) {
    const perguntaRemovida = perguntas.splice(indice, 1);
    console.log(`Pergunta removida: ${perguntaRemovida}`);
  } else {
    console.error("Índice inválido. Pergunta não encontrada para deletar.");
  }
}
