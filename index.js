// input library / package
var readlineSync = require("readline-sync");

//initialize score var as int and zero

var score = 0;

// data of high score
var highScores = [
  {
    name: "Onkar",
    score: 4,
  },

  {
    name: "Amira",
    score: 4,
  },
]

//hint dict 
var hints = [
  {
    key: "lives",
    hint: " in pune ",
  },

  {
    key: "Is married to ",
    hint: "Amira ",
  },
  {
    key: "wants to move to ",
    hint: "canada ",
  },
  {
    key: "has a dog named  ",
    hint: "Ronaldo ",
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Pune"
}, 
{
  question: "What is your wife's Name",
  answer: "Amira"
},
{
  question: "Where do you want to move?",
  answer: "Canada"
},
{
  question:"What's your dog's name?",
  answer:"Ronaldo"
}
];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to the quiz where you test your knowledge of Onkar! ");
  var userHint = readlineSync.question("Type YES if you would like a hint for the answers? ")
  if (userHint.toUpperCase() == "YES"){
    console.log("Hint for Onkar.");
    //print dict of hints 
    for (var i=0 ; i< hints.length ; i++){
    console.log("question may be " + (hints[i].key) + " answer may be " + (hints[i].hint))
    }


    
    console.log("Let's Start the quiz! ( The answers are not case sensitive) ");
  }else{
    console.log("You are a brave one");
    console.log("Let's Start the quiz!  ( The answers are not case sensitive)  ");
  }
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("Your answer is correct!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function playGame() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  

  console.log("Check out the high scores, see where you rank");

  for (var i=0 ; i< highScores.length ; i++){
    console.log((highScores[i].name) + " scored " + (highScores[i].score))
  }
  console.log("Your scored ", score);
}

// This is where all the funcs are called out
welcome();
playGame();
showScores();


