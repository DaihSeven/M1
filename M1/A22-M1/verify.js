// // let password = prompt("Digite sua nova senha");

// // while(password.length < 8){
// //     password = prompt("Sua senha esta com poucos caracteres, adicione mais")
// // }

// // let age = parseInt(prompt("Digite sua idade"));

// // function verifyAge(ageUser) {
// //   console.log(typeof ageUser);
// //   // isNaN diz oq NAO É UM NUMERO -> true
// //   // !isNaN diz oq É UM NUMERO
// //   while (!isNaN(ageUser)) {
// //     age = prompt("Voce nao esta digitando um numero");
// //   }
// // }

// //verifyAge(age);
// // function verifyAge(ageUser) {
// //   console.log(typeof ageUser);
// //   while (age - age !== 0) {
// //     age = prompt("Voce nao esta digitando um numero");
// //   }
// // }

// // verifyAge(age);

// // let age = parseInt(prompt("Digite um número: "));

// // console.log(typeof age);

// // function verifyAge(ageUser) {
// //     while(isNaN(age)) {
// //         age = prompt("Digite um número: ");
// //     }
// // }

// // verifyAge(age);

// // let age = parseInt(prompt("Digite sua idade"));
// // function verifyAge(ageUser) {
// //     let newAge = ageUser;
// //     while (isNaN(newAge)) {
// //         newAge = parseInt(prompt("Você não está digitando um número. Digite sua idade novamente:"));
// //     }
// //     alert("Entrada válida. O tipo de dado é número.");
// // }
// // verifyAge(age);

// // let age = prompt("Digite sua idade");

// // function verifyAge(userAge){
// //     while (isNaN(Number(userAge))) {
// //         age = prompt("Você não está digitando um número. Digite sua idade novamente:");
// //     }
// //     alert("Entrada válida. O tipo de dado é número.");
// // }

// // verifyAge(age)

// //let age;  // Declaramos a variável 'age' sem valor inicial.

// // While antes da função para que o número seja solicitado antes de chamar a função.
// while (isNaN(age) || age <= 0) { // garante que seja um número e que seja maior que zero.
//     age = Number(prompt("Digite sua idade (apenas números):"));
// }

// function verifyAge(ageUser) {
//   console.log(typeof ageUser);  // Mostra o tipo de dado
//   if (typeof ageUser === "number") {  // Verifica se o tipo é 'number' e não é 'NaN'.
//       console.log("Dado correto e é um número.");
//   } else {
//       console.log("Tipo de dado incorreto ou não é um número válido.");
//   }
// }
// verifyAge(age);  // Chama a função passando o valor da idade.

// // let cpf = prompt("Digite seu cpf ex: 123.123.123-22");
// // function verifyCpf(cpfUser) {
// //   console.log(cpfUser.length);
// //   console.log(cpfUser, "123.123.123-22");
// //   while (cpfUser === "123.123.123-22") {
// //     cpf = prompt("Digite seu cpf corretamente ex: 123.123.123-22");
// //   }
// // }


// // verifyCpf(cpf);


// let email = "beatriz@gmail"
// email.includes("@hotmail")

function somar(){
  console.log(2+3)
}

let nome;//variável armazenada
//while para pedir até ser verdadeira
while (true) {
  nome = prompt("Digite seu nome (mínimo 3 caracteres):");
// >=3 para validar se tem 3 no mínimo
  if (nome.length >= 3) {
    break; 
  } else {
    alert("Nome inválido. Digite novamente.");
  }
}

//armazenou e agora retorna
alert("Olá, " + nome + "! Seja bem-vindo(a)!");