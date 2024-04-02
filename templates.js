// ANCHOR html templates
function generateQuestFooter(questionNumber, questionAmount) {
    return /*html*/`
        <b>${questionNumber}</b> von <b>${questionAmount}</b> Fragen
    `
}


function generateQuestion(question, answer_1, answer_2, answer_3, answer_4) {
    return /*html*/`
        <h5 class="card-title mb-3">${question}</h5>

        <div onclick="checkSelection(1, 'a1')" id="a1" class="card mb-2 pointer">
            <div class="card-body">
                ${answer_1}
            </div>
        </div>

        <div onclick="checkSelection(2, 'a2')" id="a2" class="card mb-2 pointer">
            <div class="card-body">
                ${answer_2}
            </div>
        </div>

        <div onclick="checkSelection(3, 'a3')" id="a3" class="card mb-2 pointer">
            <div class="card-body">
                ${answer_3}
            </div>
        </div>

        <div onclick="checkSelection(4, 'a4')" id="a4" class="card mb-2 pointer">
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
