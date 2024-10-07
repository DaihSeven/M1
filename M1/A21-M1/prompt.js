// let nomes = ["Beatriz", "Daniel", "Joao", "Dudu", "Mateus"];

// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[2]);

//    enquanto o i for MENOR que o tamanho
//    total do array repita esse código

// i++
// // i = i + 1
// for(var i = 0; i < nomes.length; i++){
//     console.log(nomes[i])
// }

// array simples
//let nomes = ["Beatriz", "Daniel", "Joao", "Dudu", "Mateus"];

// objeto
// let product = {
//     name: "iphone 15",
//     price: 14.000
// }

// console.log(product.name)

// let category = {
//     name: "mesa e banho",
//     icone: "categoryTable.png"
// }

// console.log(category.icone)


// let videoYoutube = {
//     title: "venha conhecer...",
//     views: 0,
//     description: "video sobre conhecimentos gerais, link...",
//     likes: 0
// }

// console.log(videoYoutube.likes)

// let people = {
// // CHAVE: VALOR
//     name: "Pamela",
//     cpf: "123.123.123-33",
//     age: 23
// }



// array composto
// {} representam um objeto
// dentro do objeto CHAVE: VALOR
let listPerson = [
    {
        name: "Pamela",
        cpf: "123.123.123-33",
        age: 23
    },
    {
        name: "Pedro",
        cpf: "123.123.123-33",
        age: 33
    },
    {
        name: "Brendinha",
        cpf: "123.123.123-33",
        age: 22
    }
]

// for(var i = 0; i < listPerson.length; i++){
//     console.log(listPerson[i].name)
// }

let produtos = [
    {name: "iphone 15", price: 14.000},
    {name: "smart tv", price: 2.300},
    {name: "notebook", price: 1.000},
    {name: "notebook", price: 1.000},
    {name: "notebook", price: 1.000},
];

// for(var i = 0; i < produtos.length; i++){
//     let li = document.getElementsByTagName("li");
//     li[i].innerHTML = `${produtos[i].name} R$ ${produtos[i].price.toFixed(3)}`
// }

let questions = [
    {question: "quantos anos tem a lua? ", answer: 32},
    {question: "quantos planetas temos no nosso sistema solar? ", answer: 9},
    {question: "qual o nome da mãe lucinda? ", answer: "lucinda"},
]

for(var i = 0; i < questions.length; i ++){
    let response = prompt(questions[i].question);
    
    // verificar se a resposta da pergunta esta correta
    if(response === questions[i].answer.toString()){
        alert("resposta correta irmão!!!!")
    }else{
        alert(`errou truta essa é a resposta certa ${questions[i].answer}`);
        i = -1;
    }
    // i = i + 1
}
 //             0           1         2
let nomes1 = ["Beatriz", "Daniel", "Rafael"];


// variaveis
// funcoes
// laços de repetição
// condicionais 

// Cria um array vazio para armazenar os nomes
//let nomes = [];

// Solicita ao usuário que digite 3 nomes
for (let i = 0; i < 3; i++) {
  let nome = prompt("Digite o nome " + (i + 1) + ":");
  nomes.push(nome); // Adiciona o nome digitado ao array
}

// Exibe os nomes na tela
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}