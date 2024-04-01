const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submitBtn');
const resultContainer = document.getElementById('result');

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Mitochondria"
    }
];

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

        const optionsElement = document.createElement('div');
        optionsElement.classList.add('options');

        question.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('button');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => {
                selectAnswer(index, option);
            });
            optionsElement.appendChild(optionElement);
        });

        questionElement.appendChild(optionsElement);
        quizContainer.appendChild(questionElement);
    });
}

function selectAnswer(questionIndex, selectedOption) {
    questions[questionIndex].selected = selectedOption;
}

function showResults() {
    let score = 0;
    questions.forEach((question, index) => {
        if (question.selected === undefined) {
            return;
        }
        if (question.selected === question.answer) {
            score++;
        }
    });
    resultContainer.textContent = `Your Score: ${score}/${questions.length}`;
}

submitButton.addEventListener('click', showResults);

buildQuiz();
