
const questions = [
  [
    {
      question: "Qual foi a inspiração para a utilização do termo 'bug' para descrever erros em programas de computador?",
      answers: ["Um problema em um circuito lógico", "Uma referência à Segunda Guerra Mundial", "Um inseto encontrado em um dos primeiros computadores", "Uma homenagem a um pioneiro da computação"],
      correctAnswer: "Um inseto encontrado em um dos primeiros computadores"
    }
  ],
  [
    {
      question: "Qual das seguintes tags HTML é usada para criar um link?",
      answers: ["<div>", "<img>", "<a>", "<p>"],
      correctAnswer: "<a>"
    }
  ],
  [
    {
      question: "Qual linguagem de programação é conhecida como a 'linguagem da web'?",
      answers: ["Python", "Java", "JavaScript", "Ruby"],
      correctAnswer: "JavaScript"
    }
  ]
];

let quizStarted = false;
let currentPhase = 0;
let currentQuestion = 0;
let score = 0;
let correctAnswersInPhase = 0;

function loadQuestion() {
  const questionObj = questions[currentPhase][currentQuestion];
  displayQuestion(questionObj);
  addAnswerButtonListeners();
}

document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit');
  const nextButton = document.getElementById('next');

  submitButton.addEventListener('click', () => {
    if (submitButton.textContent === 'Iniciar Quiz') {
      startQuiz();
    } else {
      checkAnswer();
    }
  });

  nextButton.addEventListener('click', nextQuestion);
});

function startQuiz() {
  quizStarted = true;
  startTimer();
  loadQuestion();
  document.getElementById('submit').textContent = 'Enviar Resposta';
}

function addAnswerButtonListeners() {
  const answerButtons = document.querySelectorAll('#answers button');
  answerButtons.forEach(button => {
    button.addEventListener('click', () => {
      answerButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });
}

function displayResult(result) {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = result ? 'Acertou!' : 'Errou!';
}

function displayQuestion(questionObj) {
  const questionElement = document.getElementById('question');
  const answersElement = document.getElementById('answers');

  questionElement.textContent = questionObj.question;
  answersElement.innerHTML = '';

  questionObj.answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.dataset.answer = answer; // Adiciona o dataset
    answersElement.appendChild(button);
  });
}

function checkAnswer() {
  const selectedButton = document.querySelector('.selected');
  if (!selectedButton) {
    displayResult('Por favor, selecione uma resposta.');
    return;
  }

  const selectedAnswer = selectedButton.dataset.answer;
  const correctAnswer = questions[currentPhase][currentQuestion].correctAnswer;

  if (selectedAnswer === correctAnswer) {
    selectedButton.classList.add('correct');
    correctAnswersInPhase++;
    score += 10;
  } else {
    selectedButton.classList.add('incorrect');
  }

  displayResult(selectedAnswer === correctAnswer);

  document.getElementById('submit').style.display = 'none';
  document.getElementById('next').style.display = 'block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions[currentPhase].length) {
    currentQuestion = 0;
    currentPhase++;
  }
  if (currentPhase >= questions.length) {
    resultDiv.textContent = `Parabéns! Você acertou ${correctAnswersInPhase.value} de ${questions[currentPhase.value - 1].length} questões na última fase. Com ${score.value} pontos`;
      document.getElementById('next').style.display = 'none';
    return;
  }
  loadQuestion();
  document.getElementById('submit').style.display = 'block';
  document.getElementById('next').style.display = 'none';
}
