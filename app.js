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
    setProgressBar()
}


function nextQuestion() {
    compare(selectedAnswer);
    currentQuestion++
    checkEnd();
    somethingSelected = false;
}


function setProgressBar() {
    let progress = Math.round((+currentQuestion + 1) * 100 / +questions.length);
    document.getElementById('progress').style.width = progress + "%"
}


function compare(answer) {
    if (answer == questions[currentQuestion].right_answer) {
        usersRightAnswers++;
    }
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
















