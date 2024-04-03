let currentQuestion = 0;
let usersRightAnswers = 0;
let questions = geo;
let somethingSelected = false
let selectedAnswer
const qFooter = document.getElementById('questionFooter');
const qContainer = document.getElementById('questionContainer');
const nxtBtn = document.getElementById('nxtBtn');



function changeCategory(jsonArray) {
    currentQuestion = 0;
    usersRightAnswers = 0;
    questions = jsonArray;
    initQuiz();
}


function initQuiz() {
    qFooter.innerHTML = generateQuestFooter(+currentQuestion + 1, questions.length)
    qContainer.innerHTML = generateQuestion(
        questions[currentQuestion].question,
        questions[currentQuestion].answer_1,
        questions[currentQuestion].answer_2,
        questions[currentQuestion].answer_3,
        questions[currentQuestion].answer_4);
}


function nextQuestion() {
    compare(selectedAnswer);
    setQuestionNumber(1);
    checkEnd();
    somethingSelected = false;
}


function compare(answer) {
    if (answer == questions[currentQuestion].right_answer) {
        usersRightAnswers = +usersRightAnswers + 1;
    }
}


function setQuestionNumber(add) {
    currentQuestion = +currentQuestion + add
}


function checkEnd() {
    if (currentQuestion == questions.length) {
        qContainer.innerHTML = endScreen(usersRightAnswers, questions.length);
        setEndBtn()
    } else {
        initQuiz();
        btnDisable(true)
    }
}


function setEndBtn() {
    nxtBtn.innerHTML = 'Zum Anfang'
    nxtBtn.setAttribute('onclick', 'location.reload()');
}


function checkSelection(number, id) {
    if (somethingSelected == false) {
        selectAnAnswer(number, id);
    } else {
        unselectAnswers();
        selectAnAnswer(number, id);
    }
    btnDisable(false)
}


function btnDisable(boolean) {
    nxtBtn.disabled = boolean;
}


function selectAnAnswer(number, id) {
    document.getElementById(id).style.backgroundColor = 'lightgreen';
    somethingSelected = true;
    selectedAnswer = number;
}


function unselectAnswers() {
    initQuiz();
    somethingSelected = false;
}
















