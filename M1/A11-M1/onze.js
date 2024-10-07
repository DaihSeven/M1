numero1 = prompt('nota de fisica? ');
numero2 = prompt('nota de E.fisica? ');
numero3 = prompt('nota de inglês? ');
var n1 = numero1;
var n2 = numero2;
var n3 = numero3;
var media =  (Number(n1)+Number(n2)+Number(n3))/3;
if (media > 8) {
    alert('Parabéns pelo empenho');
}else if(media >= 6 && media <= 8) {
    alert('Boa chegou lá!');
}else {
    alert('Infezlimente foi reprovado!');
}