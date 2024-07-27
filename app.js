const questions=[
    {
        question:"What does the T-stands for in the T FLIP-FLOP?",
        answers:[
            {text:"Toggle",correct: true},
            {text:"Trigger",correct: false},
            {text:"Both trigger and toggle",correct: false},
            {text:"Either trigger or toggle",correct: false},
        ]
    },
    {
    question:"What does CSA stands for?",
    answers:[
        {text:"Computer Service Architecture",correct: false},
        {text:"Computer Speed Addition",correct: true},
        {text:"Carry Save Addition",correct: false},
        {text:"None of the above",correct: false},
    ]
},
{
question:"Which data structure is mainly used for implementing the recursive algorithm?",
answers:[
    {text:"Queue",correct: false},
    {text:"Stack",correct: true},
    {text:"Binary tree",correct: false},
    {text:"Linked List",correct: false},
]
},
{
question:"What is the outcome of the prefix expression +-*32/841?",
answers:[
    {text:"12",correct: false},
    {text:"11",correct: false},
    {text:"4",correct: false},
    {text:"5",correct: true},
]
},
{
question:"Why were cookies designed?",
answers:[
    {text:"for server-side programming",correct: true},
    {text:"for client side programming",correct: false},
    {text:"both of the above",correct: false},
    {text:"None of the above",correct: false},
]
}
];

const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + ". "+ currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct)
    {
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click", selectAnswer);
});
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    
     newFunction();
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";

    function newFunction() {
        questionElement.innerHTML = "You scored ${score} out of 5!";
    }
}

function handNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();