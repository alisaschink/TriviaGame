//create arrays with questions, answer options, and answers
var questions = [];
var answerOptions = [];
var answers = [];

//counters for correct, incorrect, and unanswered questions
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 30;
var counter;

var game = function() {
  //generate a random number to select question and matching answer
  var randomNumber = Math.floor(Math.random()*questions.length);

  //shows selected question

  //show selected answer options

  //onclick function for userGuess

  //question timer
  $("#timer").html("<h2>" + time + " " + "Seconds" + "</h2>");

  //Run function to set interval
  function run() {
    counter = setInterval(decrement, 1000);
    };

  //The decrement function.
  function decrement() {

  //Decrease timer by one.
  time--;

  //Show the number in the #show-number tag.
  $("#timer").html("<h2>" + time + " " + "Seconds" + "</h2>");


  //Once time hits zero run the stop function.
  if (time === 0) {

    stop();

    //Alert the user that time is up.
    alert("Time Up!");
    };
  };

  //The stop function
  function stop() {

  //Clears our "counter" interval.
    clearInterval(counter);
  };

  //executes timer
  run();

//increases correct counter if userGuess = correctAnswer
//congradulate user if correct answer guessed

//increases incorrect counter if userGuess != correctAnswer


//increases unanswered counter if timer runs out
//states that time has run out

//shows correct answer and image when answer given or timer runs out

//automatically selects new question after 5 seconds
//function to ensure same question is not showed multiple times per game

//shows scores at end of game

//onclick function to restart game

};

game();

