//EXEMPLO DA AULA

function receberInfo() {

  const info = prompt("Insira aqui a info");

  try {

    if ((!info === null) | "") {

      console.log("Deu tudo certo");

    } else {

      throw new Error("Falha.. não teve informações nessa string");

    }

  } catch (erro) {

    console.log(erro);
    document.getElementById('resultado').innerText = erro.message; 
  }
}  
    document.getElementById('receberInfoButton').addEventListener("click", receberInfo);

