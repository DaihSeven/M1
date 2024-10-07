function saudacao(){
    var nameUser = prompt("insira seu nome: ");
    console.log("Olá ${nameUser}");
}
saudacao();


function separarParesImpares(numeros) {
    const pares = [];
    const impares = [];
  
    numeros.forEach(numero => {
      if (numero % 2 === 0) {
        pares.push(numero);
      } else {
        impares.push(numero);
      }
    });
  
    return { pares, impares };
  }
  

  const minhaLista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const resultado = separarParesImpares(minhaLista);
  
  console.log("Números pares:", resultado.pares);
  console.log("Números ímpares:", resultado.impares);