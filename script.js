const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion()
})

function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Which is europes highest building?',
        answers: [
            {text: 'Lakhta Center', correct: true},
            {text: 'Big Ben', correct: false},
            {text: 'Eiffel Tower', correct: false},
            {text: 'Turning Torso', correct: false}
        ]
    },
    {
        question: 'Which animal is the most dangerous to humans?',
        answers: [
            {text: 'Bear', correct: false},
            {text: 'Snake', correct: false},
            {text: 'Mosquitoes', correct: true},
            {text: 'Shark', correct: false}
        ]
    },
    {
        question: 'Which is the deepest ocean in the world?',
        answers: [
            {text: 'Atlantic Ocean', correct: false},
            {text: 'Arabic Ocean', correct: false},
            {text: 'Indian Ocean', correct: false},
            {text: 'The Pacific Ocean', correct: true}
        ]
    },
    {
        question: 'Who is the richest person on earth?',
        answers: [
            {text: 'Jeff Bezos (Amazon)', correct: false},
            {text: 'Elon Musk (Tesla)', correct: true},
            {text: 'Bill Gates (Windows)', correct: false},
            {text: 'Ingvar Kamprad (IKEA)', correct: false}
        ]
    },
    {
        question: 'How tall is the tallest person on earth?',
        answers: [
            {text: '256cm', correct: false},
            {text: '272cm', correct: true},
            {text: '291cm', correct: false},
            {text: '234cm', correct: false}
        ]
    },
    {
        question: 'Who is the most followed person on Instagram?',
        answers: [
            {text: 'Leo Messi', correct: false},
            {text: 'Kylie Jenner', correct: false},
            {text: 'Cristiano Ronaldo', correct: true},
            {text: 'Kim Kardashian', correct: false}
        ]
    },

]