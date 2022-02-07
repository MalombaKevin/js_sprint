var quizAnswers = {
    acronym: "javascript",
};



let quizForm = document.getElementById("quizForm");
let score = 0;

quizForm.addEventListener("submit",
    function(event) {
        event.preventDefault();
        var quizData = new FormData(quizForm);
        console.log(quizData);
        compareData(quizData);
    });

function compareData(quizData) {
    var jsacronym = userData.get("acronym");
    if (jsacronym === quizAnswers["acronym"]) {
        score += 20;
    }


}