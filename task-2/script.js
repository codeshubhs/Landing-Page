const questions=[
    {
        question:"What is the fulll form of CSS",
        answers: [
            {
              text: "Hypertext Markup Language" , correct:false
            },
            {
                text: "Cascading Spread Sheet" , correct:false
              },
              {
                text: "Cascading Style Sheet" , correct:true
              },
              {
                text: "Java Script" , correct:false
              },

        ]
    },

    {
        question:"What is the fulll form of HTML",
        answers: [
            {
              text: "Hypertext Markup Language" , correct:true
            },
            {
                text: "Cascading Spread Sheet" , correct:false
              },
              {
                text: "Cascading Style Sheet" , correct:false
              },
              {
                text: "Java Script" , correct:false
              },

        ]

    },
{
    question:"What is the fulll form of JS",
        answers: [
            {
              text: "Hypertext Markup Language" , correct:false
            },
            {
                text: "Cascading Spread Sheet" , correct:false
              },
              {
                text: "Cascading Style Sheet" , correct:false
              },
              {
                text: "Java Script" , correct:true
              },

        ]
    },

    {
        question:"Where is the correct place to insert a javascript",
        answers: [
            {
              text: "The <head>section" , correct:false
            },
            {
                text: "Both the <head> section and the <body> section" , correct:true
              },
              {
                text: " The <body> sction" , correct:false
              },
              {
                text: "None" , correct:false
              },

        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons= document.getElementById("answers-button");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
   function  showQuestion(){

    resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo= currentQuestionIndex+1;
questionElement.innerHTML= questionNo+". " + currentQuestion.question;


currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");

    button.innerHTML= answer.text;
    button.classList.add("btn");

    answerButtons.appendChild(button);

    if(answer.correct){
        button.dataset.correct = answer.correct;
    }

button.addEventListener("click", selectAnswer);
}
);


    }


    function resetState(){
        nextButton.style.display= "none";

        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }


    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct == "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }
        else{
            selectedBtn.classList.add("incorrect");
        }

        Array.from(answerButtons.children).forEach(button =>{
if(button.dataset.correct=="true"){
    button.classList.add("correct");
}

button.disabled = true;
        });

        nextButton.style.display = "block";
    }

    function showScore(){
        resetState();

        questionElement.innerHTML= `You Scored ${score} out of ${questions.length} !`;
        
        nextButton.innerHTML= "Play Again";

        nextButton.style.display="block";
    }

    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }
    nextButton.addEventListener("click" , ()=>{
if(currentQuestionIndex < questions.length){
    handleNextButton();
}
else{
    startQuiz();
}
    });

    startQuiz();

