//ARROW FUNCTIONS
/*
const ireland = ["Dublin", "Galway", "Cork"];

const love = ireland.map(function(name) {
    return `I love ${name}!`;
});

const loveArrow = ireland.map((name) => {
    return `I love ${name}!`;
});

const loveArrowSingle = ireland.map(name => {
    return `I love ${name}!`;
});

const loveArrowOneLine = ireland.map(name => `I love ${name}!`);

const loveChain = ireland
    .filter(name => name === "Dublin")
    .map(name => `I love ${name}!`);

console.log(love);
console.log(loveArrow);
console.log(loveArrowSingle);
console.log(loveArrowOneLine);
console.log(loveChain);
*/
//Ao clicar no botão ele aparece Window no console, pois o this é global. 
//Para que o this seja o botão, deve-se usar uma função normal.
//é mais recomendado usar o arrow function quando está dentreo de outra e quer pegar o todo, ou adicionar classes.Quando quer pegar de dentro do objeto que está trabalhando.
const btn2 = document.getElementById("btn");
btn.addEventListener("click", () => {
    console.log(this);
});
//Para botão é bom usar o function() mesmo
const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    console.log(this);
});