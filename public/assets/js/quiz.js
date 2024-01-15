const questions = [
    {
        question: "1-Parmi ces villes, laquelle se situe le plus au Nord de la France ?",
        answers: {
            a: "Marseille",
            b: "Lyon",
            c: "Bordeaux",
            d: "Grenoble"
        },
        correctAnswer: "b"
    },
    {
        question: "2-Dans quelle région se trouve le Mont Saint-Michel ?",
        answers: {
            a: "En Bretagne",
            b: "En Normandie",
            c: "Dans les Pays de La Loire",
            d: "En Île de France"
        },
        correctAnswer: "b"
    },
    {
        question: "3-Quel département est le moins peuplé de France ? ",
        answers: {
            a: "La Creuse",
            b: "La Lozère",
            c: "Le Gers"
        },
        correctAnswer: "b"
    },
    {
        question: "4-Quel est le fleuve le plus long de France ?",
        answers: {
            a: "La Loire",
            b: "La Seine",
            c: "La Moselle"
        },
        correctAnswer: "a"
    },
    {
        question: "5-Depuis 2016, combien y a-t-il de régions en France métropolitaine ?",
        answers: {
            a: "5",
            b: "17",
            c: "13"
        },
        correctAnswer: "c"
    },
    {
        question: "6-Lequel de ces sommets est le plus élevé ?",
        answers: {
            a: "Le mont Joli",
            b: "Le mont d’Or",
            c: "Le mont Blanc"
        },
        correctAnswer: "c"
    },
    {
        question: "7-Combien de Pays ont une frontière avec la France métropolitaine ? ",
        answers: {
            a: "8",
            b: "5",
            c: "6"
        },
        correctAnswer: "a"
    },
    {
        question: "8-Laquelle de ces îles n’est pas française ?",
        answers: {
            a: "La Réunion",
            b: "La Barbade",
            c: "La Guadeloupe"
        },
        correctAnswer: "b"
    },
    {
        question: "9-Combien de mers et d’océans entourent la France métropolitaine ?",
        answers: {
            a: "4",
            b: "5",
            c: "6"
        },
        correctAnswer: "a"
    },



    // more questions
];

// Quiz container
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('result');
const submitButton = document.getElementById('submit-button');

// Display quiz
displayQuiz();

submitButton.onclick = showResults;

function displayQuiz() {
    // Output questions and answers
    let output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        // Answers
        let answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>&ensp;&ensp;`
            );
        }

        // Add question and answers to output
        output.push(
            `<div class="question" style="font-weight: bold;"> <h5 class="text-secondary fw-bold">${currentQuestion.question} </h5> </div>
            <div class="answers"> ${answers.join('')} </div> <br>`
        );
    });

    // Combine output and add to quiz container
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    // gather answer containers from our quiz
    let answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    questions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        let userAnswer = (answerContainers[questionNumber].querySelector(`input[name=question${questionNumber}]:checked`) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'green';
        } else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' sur ' + questions.length;
}