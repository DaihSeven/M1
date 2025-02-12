// aula 7
const button = document.getElementById("get-btn");

const div = document.getElementById("data-container");

function getData() {

  const xhr = new XMLHttpRequest();

  // ABRIR

  xhr.open("GET", "https://rickandmortyapi.com/api/character");

  // ENVIAR

  xhr.send();

  // RETORNA

  xhr.onload = function () {

    console.log(xhr.status);

    console.log(xhr.response);

    div.innerText = xhr.responseText;

  };

}

button.addEventListener("click", getData);