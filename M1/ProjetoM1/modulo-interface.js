export function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result ? 'Acertou!' : 'Errou!';
}
  //essa é a que deveria chamar a função de checar a resposta, retornar
export function displayQuestion(questionObj) {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
  
    questionElement.textContent = questionObj.question;
    answersElement.innerHTML = ''; // Limpa as respostas anteriores
  
    questionObj.answers.forEach(answer => {
      const radioButton = document.createElement('input');
      radioButton.type = "radio";
      button.textContent = answer;
      answersElement.appendChild(button);
    });

    const label = document.createElement('label');
    label.htmlFor = 'meuRadioButton'; // Atributo htmlFor liga o label ao input
    label.textContent = 'Opção 1'; // Texto do rótulo

    const radioButton = document.createElement('input');
    radioButton.type = "radio";
    radioButton.id = 'meuRadioButton';
}
  