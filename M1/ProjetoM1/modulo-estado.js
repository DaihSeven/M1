export let currentPhase = 0;
export let currentQuestion = 0;
export let score = 0; 
export let correctAnswersInPhase = 0;

export function incrementCurrentPhase() {
  currentPhase++;
}

export function incrementCurrentQuestion() {
  currentQuestion++;
}

export function incrementScore() {
  score++;
}

export function incrementCorrectAnswersInPhase() {
  correctAnswersInPhase++;
}


export function tenincrementScore() {
    score = 10;
  }