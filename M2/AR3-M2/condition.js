function calcularMedia() {
    let notas = [];
    let numAlunos = parseInt(prompt("Quantos alunos fazem parte da turma? "))

    for (let i = 0; i < numAlunos; i++){
        let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}: `));
        notas.push(nota);
    }

    let soma = notas.reduce((a,b) => a+b, 0);
    let media = soma / notas.length;

    ;

    alert(`A média das notas é: ${media.toFixed(2)}. Os alunos foram ${retornarAprovacao(media)}`);
}

function retornarAprovacao(media) {
    if (media >= 7) {
        return "Aprovados";
    } else {
        return "Reprovados";
    }
}

function porcentagemAp() {
    let aprovados = 0;

    for (let i = 0; i < numAlunos; i++){
        if (notas[i] >7){
            aprovados++;
        }
    }

    calcularMedia();
    let porcentagem = (aprovados / numAlunos) * 100;

    if(porcentagem > 60) {
        console.log(`Parabéns a turma pelo desempenho!!`);
    } else {
        console.log(`Poxa... a turma foi reprovada, se esforcem mais para a recuperação!`);
    }
}
 porcentagemAp();