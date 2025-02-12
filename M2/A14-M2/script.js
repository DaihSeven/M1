/*função novaData que cria uma nova data usando o objeto Date do JavaScript e retorna a data no formato DD/MM/AAAA:

new Date() cria um objeto de data com a data e hora atuais.

getDate() obtém o dia do mês.

getMonth() obtém o mês (de 0 a 11), então adicionamos 1 para obter o mês correto.

getFullYear() obtém o ano completo com quatro dígitos.

padStart(2, '0') garante que o dia e o mês sejam sempre representados por dois dígitos, adicionando um zero à esquerda, se necessário.
*/

function novaData() {
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, '0');
  const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // getMonth() retorna meses de 0 a 11
  const ano = hoje.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

// Exemplo de uso
console.log(novaData()); // Saída: "21/11/2024" (ou a data atual)

/* Intl.DateTimeFormat

Intl.DateTimeFormat é uma função em JavaScript que permite a formatação de datas e horas de acordo com as convenções de uma localidade específica.
Serve para formatar datas e horas de maneira consistente e apropriada para diferentes regiões e idiomas, facilitando a internacionalização de aplicações web.

Como usar:
Para usar Intl.DateTimeFormat, você cria uma nova instância da função passando a localidade desejada e, opcionalmente, opções de formatação. Em seguida, você pode usar o método format para formatar uma data.
*/
// Cria um objeto de formatação para a localidade 'pt-BR' (Português do Brasil)
const formatter = new Intl.DateTimeFormat('pt-BR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
});

// Formata a data atual
const formattedDate = formatter.format(new Date());
console.log(formattedDate); // Exemplo de saída: "21 de novembro de 2024 16:51:00"

/* 
Calcular a diferença entre duas datas usando timestamps;
Captura o evento de submissão do formulário e previne o comportamento padrão.

Obtém as datas de início e fim inseridas pelo usuário.

Calcula a diferença de tempo em milissegundos.

Converte a diferença de tempo em dias.

Exibe o resultado na página.
*/
document.getElementById('dateForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtendo os valores das datas
  const startDate = new Date(document.getElementById('startDate').value);
  const endDate = new Date(document.getElementById('endDate').value);

  // Calculando a diferença de tempo em milissegundos
  const timeDifference = endDate - startDate;

  // Convertendo a diferença de tempo em dias
  const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // Exibindo o resultado
  document.getElementById('result').innerText = `A diferença é de ${dayDifference} dias.`;
});
