/*
// Função para fazer a requisição à API e exibir os resultados
function buscarInformacoesLocalizacoes() {
    const localizacoes = ['Citadel of Ricks', 'Interdimensional Cable', 'Immortality Field Resort'];
    const apiUrl = 'https://rickandmortyapi.com/api/location'; // URL da API
  
    // Criar um elemento div para armazenar os resultados
    const resultadosDiv = document.createElement('div');
    resultadosDiv.id = 'resultados';
  
    // Função auxiliar para criar um elemento HTML
    function criarElemento(tag, classe, texto) {
      const elemento = document.createElement(tag);
      elemento.classList.add(classe);
      elemento.textContent = texto;
      return elemento;
    }
  
    // Iterar sobre as localizações e fazer as requisições
    localizacoes.forEach(localizacao => {
      fetch(`${apiUrl}/?name=${localizacao}`)
        .then(response => response.json())
        .then(data => {
          const resultado = data.results[0];
          const divLocalizacao = criarElemento('div', 'localizacao');
          divLocalizacao.innerHTML = `
            <h2>${resultado.name}</h2>
            <p>Tipo: ${resultado.type}</p>
            <p>Dimensão: ${resultado.dimension}</p>
          `;
          resultadosDiv.appendChild(divLocalizacao);
        })
        .catch(error => {
          console.error('Erro ao buscar informações:', error);
        });
    });
  
    // Adicionar a div de resultados ao documento
    document.body.appendChild(resultadosDiv);
  }
  
  // Chamar a função para iniciar a busca
  buscarInformacoesLocalizacoes();
  */
  /*
  //código do D
  function PegaDados(nomeLocation) {

    const XML = new XMLHttpRequest();

    // Abrir a API

    XML.open("GET", `https://rickandmortyapi.com/api/location/?name=${nomeLocation}`);

    // Enviar a requisição

    XML.send();

    // Tratar a resposta quando a requisição terminar

    XML.onload = function() {

        if (XML.status === 200) {

            const respostaApi = JSON.parse(XML.response); // Converte a string JSON em objeto

            const lista = document.getElementById("lista");

            // Adiciona os nomes das localizações no HTML

            respostaApi.results.forEach(location => {

                const li = document.createElement("li");

                li.textContent = location.name;

                lista.appendChild(li);

            });

        } else {

            console.error("Erro na requisição:", XML.status, XML.statusText);

        }

    };

}


// Chamar a função para três cidades

PegaDados("Citadel of Ricks");

PegaDados("Interdimensional Cable");

PegaDados("Immortality Field Resort");
*/
/* 
//Código o
const button = document.getElementById("get-btn");

const div = document.getElementById("data-container");

const characterId= document.getElementById("characterId");

function pegaDadosApi(nomeLocation) {

  const XMR = new XMLHttpRequest();

  // ABRIR

  XMR.open("GET", `https://rickandmortyapi.com/api/location/?name${nomeLocation}`);

  // ENVIAR

  XMR.send();

  // RETORNA

  XMR.onload = function () {

    //PRECISO CONVERTER ESSA STRICNG JSON EM UM OBJETO NORMAL(JSON.parse)

    const respostaApi= JSON.parse(XMR.response);

    console.log(respostaApi.results[0].name)

    console.log(xhr.status);

    console.log(xhr.response);

    div.innerHTML = xhr.responseText;

  };

}

button.addEventListener("click", pegaDadosApi);
*/
//CORRETO
// CAPTURA DE ELEMENTOS DA DOM 
const nameL = document.getElementById("name"); 
const dimensionL = document.getElementById("dimension"); 
const createdL = document.getElementById("created"); 
const input = document.getElementById("location"); 
const button = document.getElementById("buscar"); 
// FUNÇÃO QUE CONSOME A API DO RICK AND MORTY 
function pegaDadosApi(nomeLocation) { 
  const XML = new XMLHttpRequest(); 
  // ABERTURA DA API 
  XML.open("GET", `https://rickandmortyapi.com/api/location/?name=${nomeLocation}`); 
  // ENVIAR DE FATO 
  XML.send(); 
  // RETORNA 
  XML.onload = function () { 
    if (XML.status >= 200 && XML.status < 300) { 
      // CONVERTE STRING JSON EM OBJETO 
      const respostaApi = JSON.parse(XML.response); 
      const location = respostaApi.results[0]; 
      nameL.innerText = location.name; 
      dimensionL.innerText = location.dimension; 
      createdL.innerText = new Date(location.created).toLocaleDateString(); 
    } else { 
      console.error('Erro na solicitação:', XML.status, XML.statusText); 
      alert('Localização não encontrada ou houve um erro na API'); 
    } }; 
    XML.onerror = function () { 
      console.error('Erro na rede'); 
      alert('Houve um problema de rede.'); 
    }; 
  } 
    button.addEventListener("click", () => { 
      pegaDadosApi(input.value); 
      input.value = ""; 
    });

