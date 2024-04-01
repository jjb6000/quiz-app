let currentQuestion = 0;
let usersRightAnswers = 0;
const qFooter = document.getElementById('questionFooter');
const qContainer = document.getElementById('questionContainer');

function initQuiz() {
    qFooter.innerHTML = generateQuestFooter(+currentQuestion +1, questions.length)
    qContainer.innerHTML = generateQuestion(
        questions[currentQuestion].question, 
        questions[currentQuestion].answer_1, 
        questions[currentQuestion].answer_2, 
        questions[currentQuestion].answer_3,
        questions[currentQuestion].answer_4);
}


function compare(answer) {
    if (answer == questions[currentQuestion].right_answer) {
        usersRightAnswers = +usersRightAnswers + 1;
    }
    currentQuestion = +currentQuestion + 1;
    checkEnd()
}


function checkEnd() {
    if (currentQuestion == questions.length) {
        qContainer.innerHTML = endScreen(usersRightAnswers, questions.length);
    } else {
        initQuiz();
    }
}













// ANCHOR html templates
function generateQuestFooter(questionNumber, questionAmount) {
    return /*html*/`
        <b>${questionNumber}</b> von <b>${questionAmount}</b> Fragen
    `
}


function generateQuestion(question, answer_1, answer_2, answer_3, answer_4) {
    return /*html*/`
        <h5 class="card-title mb-3">${question}</h5>

        <div onclick="compare(1)" class="card mb-2">
            <div class="card-body">
                ${answer_1}
            </div>
        </div>

        <div onclick="compare(2)" class="card mb-2">
            <div class="card-body">
                ${answer_2}
            </div>
        </div>

        <div onclick="compare(3)" class="card mb-2">
            <div class="card-body">
                ${answer_3}
            </div>
        </div>

        <div onclick="compare(4)" class="card mb-2">
            <div class="card-body">
                ${answer_4}
            </div>
        </div>
    `;
}


function endScreen(usersRightAnswers, questionAmount) {
    return /*html*/`
        <h5 class="card-title mb-3"> Du hast ${usersRightAnswers} von ${questionAmount} Fragen richtig beantwortet!</h5>
    `;
}
