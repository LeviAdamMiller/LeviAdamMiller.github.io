/*
  Author: Levi Miller
  Date: 3/16/23
  File: quiz.js
  Individual Assignment Quiz Web Application Javascript
 */

//stores the quiz questions after the page loads
let quizBank;
let index = 0;
window.onload = startApplication;
//store user score in variable
let correctScore = 0;
let incorrectScore = 0;

async function startApplication() {
    //load the quiz questions from the remote api
    let response = await fetch("https://the-trivia-api.com/api/questions?limit=50");
    quizBank = await response.json();

    document.getElementById('reset').addEventListener('click', resetButton);
    document.getElementById('new-question').addEventListener('click', newQuestion);

    loadQuestions(quizBank, index);
    document.getElementById('answer-0').addEventListener('click', (e) => checkAnswer(e.target.innerHTML, quizBank[index].correctAnswer))
    document.getElementById('answer-1').addEventListener('click', (e) => checkAnswer(e.target.innerHTML, quizBank[index].correctAnswer))
    document.getElementById('answer-2').addEventListener('click', (e) => checkAnswer(e.target.innerHTML, quizBank[index].correctAnswer))
    document.getElementById('answer-3').addEventListener('click', (e) => checkAnswer(e.target.innerHTML, quizBank[index].correctAnswer))
}


// populate with questions 
function loadQuestions(quizBank, index) {

    const questions = quizBank[index].incorrectAnswers.concat(quizBank[index].correctAnswer);
    scrambleArray(questions);
    document.getElementById("answer-0").innerHTML = questions[0];
    document.getElementById("answer-1").innerHTML = questions[1];
    document.getElementById("answer-2").innerHTML = questions[2];
    document.getElementById("answer-3").innerHTML = questions[3];
    document.getElementById("question-num").innerHTML = `Question #${index}`;
    document.getElementById("question-text").innerHTML = `${quizBank[index].question}`;
}

function checkAnswer(guess, correctAnswer) {
    if (guess == correctAnswer) {
        correctScore++;
    } else {
        incorrectScore++;
    }
    updateScore();
    newQuestion();
}


function scrambleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

}

function updateScore() {
    document.getElementById('correct').innerHTML = correctScore;
    document.getElementById('incorrect').innerHTML = incorrectScore;
}

//resetbutton set score back to zero
function resetButton() {
    correctScore = 0;
    incorrectScore = 0;
    document.getElementById("correct").innerHTML = correctScore;
    document.getElementById('incorrect').innerHTML = correctScore;
}

function newQuestion() {

    index++;
    loadQuestions(quizBank, index);

}
