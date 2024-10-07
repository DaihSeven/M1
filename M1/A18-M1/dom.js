function contarCaracteres() {
    const nome = document.getElementById("nome").value;
    const numCaracteres = nome.length;
    const resultado = document.getElementById("resultado");
    const resultadoFinal = `${nome} = ${numCaracteres}`;
    resultado.textContent = resultadoFinal;
  }

  function salarioImposto(porcentagem){

    let salarioTodo = +prompt("Digite seu salário:")

    let imposto = (salarioTodo * (10 / 100))

    let salarioFinal = salarioTodo - imposto

    let h1Element = document.getElementById("Salario")

    h1Element.textContent = `Seu salário após ${porcentagem}% de imposto é: R$${salarioFinal} `;

}

salarioImposto(10);
  