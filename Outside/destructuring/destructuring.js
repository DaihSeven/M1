//DESTRUCTURING com arrays
//você desestrutura o array em variáveis
let arrai = [1, 2, 3, 4];
let [num1, num2, mun3, num4] = arrai;

console.log(num1);
console.log(num2);
console.log(mun3);
console.log(num4);

//com objetos
const pessoa = {
    nome: "Daiane",
    idade: 20,
    profissao: "Programadora"
}
let {nome: nomeVar, idade: idadeVar,profissao: profissaoVar } = pessoa;

console.log(nomeVar);
console.log(idadeVar);
console.log(profissaoVar);