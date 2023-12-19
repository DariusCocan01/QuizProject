const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const displayScore = document.getElementById("totalScore");

let currentQuestion = {};
let score = 0;
let acceptAnswers = false;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
    {
        question: "What is the capital of France?",
        choice1: "Berlin",
        choice2: "Praga",
        choice3: "Paris",
        choice4: "Lyon",
        level:1,
        answer: 3
    },
    {
        question: "What is the capital of Japan?",
        choice1: "Seoul",
        choice2: "Beijing",
        choice3: "Tokyo",
        choice4: "Bangkok",
        level: 1,
        answer: 3
      },
      {
        question: "Which river is the longest in the world?",
        choice1: "Nile",
        choice2: "Amazon",
        choice3: "Yangtze",
        choice4: "Mississippi",
        level: 1,
        answer: 2
      },
      {
        question: "Who painted the Mona Lisa?",
        choice1: "Vincent van Gogh",
        choice2: "Leonardo da Vinci",
        choice3: "Pablo Picasso",
        choice4: "Michelangelo",
        level: 1,
        answer: 2
      },
      {
        question: "Which ocean is between Africa and Australia?",
        choice1: "Atlantic Ocean",
        choice2: "Arctic Ocean",
        choice3: "Indian Ocean",
        choice4: "Pacific Ocean",
        level: 1,
        answer: 3
      },
      {
        question: "What imaginary line divides the Earth into Northern and Southern Hemispheres?",
        choice1: "Prime Meridian",
        choice2: "Equator",
        choice3: "Tropic of Cancer",
        choice4: "International Date Line",
        level: 1,
        answer: 2
      },
    
      // Nivel 2 (Moderat)
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        choice1: "China",
        choice2: "India",
        choice3: "Japan",
        choice4: "South Korea",
        level: 2,
        answer: 3
      },
      {
        question: "What is the capital of Spain?",
        choice1: "Lisbon",
        choice2: "Rome",
        choice3: "Madrid",
        choice4: "Paris",
        level: 2,
        answer: 3
      },
      {
        question: "What is the official currency of Germany?",
        choice1: "Euro",
        choice2: "Dollar",
        choice3: "Yen",
        choice4: "Swiss Franc",
        level: 2,
        answer: 1
      },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        choice1: "William Shakespeare",
        choice2: "Jane Austen",
        choice3: "Charles Dickens",
        choice4: "Emily Brontë",
        level: 2,
        answer: 1
      },
      {
        question: "Where is the Dead Sea located?",
        choice1: "Africa",
        choice2: "Asia",
        choice3: "North America",
        choice4: "Europe",
        level: 2,
        answer: 2
      },
    
      // Nivel 3 (Dificil)
      {
        question: "What is the highest mountain peak in the world?",
        choice1: "Kilimanjaro",
        choice2: "Everest",
        choice3: "Aconcagua",
        choice4: "Denali",
        level: 3,
        answer: 2
      },
      {
        question: "How many continents are there on Earth?",
        choice1: "5",
        choice2: "6",
        choice3: "7",
        choice4: "8",
        level: 3,
        answer: 3
      },
      {
        question: "What is the capital of Canada?",
        choice1: "Toronto",
        choice2: "Vancouver",
        choice3: "Ottawa",
        choice4: "Montreal",
        level: 3,
        answer: 3
      },
      {
        question: "Who was the first person to walk on the Moon?",
        choice1: "Buzz Aldrin",
        choice2: "Neil Armstrong",
        choice3: "Michael Collins",
        choice4: "Yuri Gagarin",
        level: 3,
        answer: 2
      },
      {
        question: "Which ocean is between North America and South America?",
        choice1: "Indian Ocean",
        choice2: "Arctic Ocean",
        choice3: "Atlantic Ocean",
        choice4: "Pacific Ocean",
        level: 3,
        answer: 3
      },
      {
        question: "Which planet is known as the Red Planet?",
        choice1: "Earth",
        choice2: "Mars",
        choice3: "Venus",
        choice4: "Jupiter",
        level: 1,
        answer: 2
      },
      {
        question: "What is the largest mammal in the world?",
        choice1: "Elephant",
        choice2: "Blue Whale",
        choice3: "Giraffe",
        choice4: "Hippopotamus",
        level: 1,
        answer: 2
      },
      {
        question: "What is the currency of the United Kingdom?",
        choice1: "Euro",
        choice2: "Yen",
        choice3: "Dollar",
        choice4: "Pound Sterling",
        level: 1,
        answer: 4
      },
      {
        question: "In which year did Christopher Columbus first reach the Americas?",
        choice1: "1492",
        choice2: "1588",
        choice3: "1620",
        choice4: "1776",
        level: 1,
        answer: 1
      }
];
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 9;

startGame = () =>{
    questionCounter =0;
    score =0;
    availableQuestion = [...questions];
    getNewQuestion();
}
getNewQuestion = () =>{
    if(availableQuestion.length == 0 || questionCounter>MAX_QUESTIONS){
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = questionCounter + ". "+currentQuestion.question;

    choices.forEach(choice =>{
        const number =choice.dataset['number'];
        choice.innerText = currentQuestion['choice'+number];
    })
    availableQuestion.splice(questionIndex,1);
    acceptAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click",e =>{
        if(!acceptAnswers) return;
        acceptAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        var classToApply = 'incorrect';
        if(selectedAnswer == currentQuestion.answer){
          classToApply = 'correct';
          score = score+1;
        }
        selectedChoice.classList.add(classToApply);
        
        
        setTimeout(function() {
          console.log("S-au scurs o secundă!");
          selectedChoice.classList.remove(classToApply);
          displayScore.innerText = "Score: "+score + "/10";
          getNewQuestion();
      }, 1000);


        console.log(classToApply);
        //getNewQuestion();
    });
});
startGame();