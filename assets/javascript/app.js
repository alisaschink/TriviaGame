//create arrays with questions, answer options, and answers
var questions = ["Which movie was released first?", "What is considered to be the first slasher movie?", 
                  "What is the name of the Demon who possesses Regan in the Exorcist (1973)?", 
                  "How many deaths occurred in the original Scream (1996)?", 
                  "Which if the following did Wes Craven NOT direct?", 
                  "Which iconic horror movie killer went to outer space?", 
                  "Which of the following is NOT based off of a Stephen King Novel?", 
                  "What was the name of Jamie Lee Curtis’s character in Halloween (1978)?", 
                  "What Serial Killer is the FBI trying to catch in The Silence of the Lambs (1991)?", 
                  "Which horror movie killer has the highest total body count?"];

var answerOptions = [["A. Friday the 13th", "B. Nightmare on Elm Street","C. Halloween", "D.  Carrie"], 
                      ["A.  Peeping Tom", "B.  Psycho", "C.  Black Sunday", "D.  Eyes Without a Face"], 
                      ["A.  Beelzebub", "B. Pazuzu", "C.  Varik", "D. Lucifer"], 
                      ["A.  5", "B. 6", "C. 7", "D. 8"], 
                      ["A.  Rosemarys Baby (1968)", "B.  The Last House on the Left (1972)", "c. The Hills Have Eyes (1977)", "d.  A Nightmare on Elm Street (1984)"], 
                      ["A.  Freddy Krueger", "B.  Jason Voorhees", "C.  Michael Myers", "D. Norman Bates"], 
                      ["A.  The Shining (1980)", "B.  The Dead Zone (1983)", "C.  Manhunter (1986)", "D.  Thinner (1996)"], 
                      ["A.  Elizabeth Solly", "B. Kim Hammond", "C. Judith Myers", "D.  Laurie Strode"], 
                      ["A.  Buffalo Bill", "B.  The Tooth Fairy", "C. Hannibal Lecter", "D. Red Dragon"], 
                      ["A.  Michael Myers", "B. Leatherface", "C. Freddy Krueger", "D.  Jason Voorhees"]];

var answers = ["D", "A", "B", "C", "A", "B", "C", "D", "A", "D"];

var explanations = ["Correct Answer: D. Carrie was released in 1976.", 
              "Correct Answer: A. While Peeping Tom (1960) is often referred to as the first slasher film, it is also the first movie to put the audience in the killer’s point of view.", 
              "Correct Answer: B. Pazuzu is a demon known in Assyrian and Babylonian mythology.", 
              "Correct Answer: C. Deaths (in order) included Steve Orth, Casey Becker, Principal Arthur Himbry, Tatum Riley, Kenny Jones, Stu, and Billy.", 
              "Correct Answer: A. Rosemary’s Baby (1968) was directed by Roman Polanski.", 
              "Correct Answer: B. The movie Jason X (2001) takes place on a spaceship in the 25th century.", 
              "Correct Answer: C. Manhunter (1986) was based off of the book Red Dragon, written by Thomas Harris.", 
              "Correct Answer: D. Elizabeth Solly and Kim Hammond were the names of the characters that Jamie Lee Curtis plays in The Fog (1980) and Prom Night (1980) respectively. Judith Myers is the name of the older sister that Michael Myers murders in the beginning of the movie.", 
              "Correct Answer: A. Bill was the serial killer that skinned his victims to make a suit for himself in The Silence of the Lambs. FBI agent Clarice Starling went to Hannibal Lecter for insight on the case in the beginning of the movie.", 
              "Correct Answer: D. The character of Jason Voorhees has the highest body count with 158 total kills throughout his movies."];

//counters for correct, incorrect, and unanswered questions
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 30;
var timeCounter;
var questionNumber = 0
var questionCounter;

//button to start the game
$("#startGame").html("<button>" + "Start the Game!" + "</button>");

//instructions for the game
$("#instructions").html("<p>" + "You will have 30 seconds to answer each question. There are 10 questions in total." + "</p>");

$("#startGame").on("click", function() {
      $("#startGame").empty();
      $("#instructions").empty();

      game();

    });

//function to start the game
var game = function() {
  
  // //generate a random number to select question and matching answer
  // var randomNumber = Math.floor(Math.random()*questions.length);

  //shows selected question
  $("#questionDiv").html("<p>" + questions[questionNumber] + "</p>");
  var correctAnswer = answers[questionNumber];

  //show selected answer options
   //creates buttons for selected answer options
  var answerArray = answerOptions[questionNumber];
 
  var A = $("<button>").addClass("answerButton");
  var B = $("<button>").addClass("answerButton");
  var C = $("<button>").addClass("answerButton");
  var D = $("<button>").addClass("answerButton");

  var buttons = [A, B, C, D];
  var letters = ["A", "B", "C", "D"];
  //for loop to create buttons for each multiple choice answer.
  for (var i = 0; i < 4; i++) {

    var options = $(buttons[i]).attr("data-value", letters[i]).html("<h4>" + answerArray[i] + "</h4>");
    //each answer option will get added to the page.

    $("#answerDiv").append(options);
     
  };

  //onclick function for userGuess

  $(".answerButton").on("click", function() {
    // Sets buttonValue to the data value for each button
    var buttonValue = ($(this).data("value"));

      console.log(buttonValue);
      //increases correct counter if buttonValue = correctAnswer
      if (buttonValue === correctAnswer) {
        correct++
        //congradulate user if correct answer guessed
        console.log("that's correct!");
        console.log(explanations[questionNumber]);
        questionNumber++
        setInterval(reset, 3000);
      } else {
        //increases incorrect counter if userGuess != correctAnswer
        incorrect++
        console.log("incorrect!");
        console.log(explanations[questionNumber]);
        questionNumber++
        setInterval(reset, 3000);
      };

    });

  //question timer
  $("#timer").html("<h2>" + time + " " + "Seconds" + "</h2>");

  //Run function to set interval
  function run() {
    timeCounter = setInterval(decrement, 1000);
    };

  //The decrement function.
  function decrement() {

  //Decrease timer by one.
  time--;

  //Show the number in the #show-number tag.
  $("#timer").html("<h2>" + time + " " + "Seconds" + "</h2>");


  //Once time hits zero run the stop function.
  if (time === 0) {

    stopTime();

    //increases unanswered counter if timer runs out
    unanswered++
    console.log(explanations[questionNumber]);

    //Alert the user that time is up.
    console.log("Time Up!");
    questionNumber++
    setInterval(reset, 3000);


    };
  };

  //The stop function
  function stopTime() {

  //Clears our "counter" interval.
    clearInterval(timeCounter);
  };

  //executes timer
  run();

//reset function to set interval
  function reset() {
    $("#questionDiv").empty();
    $("#answerDiv").empty();
    stopTime();
    $("#timer").empty();
    time = 30;
    game();
    };
  //resets game questions/answers after 3 seconds
  // questionCounter = setInterval(reset, 3000);



//shows correct answer and image when answer given or timer runs out

//automatically selects new question after 5 seconds
//function to ensure same question is not showed multiple times per game

//shows scores at end of game

//onclick function to restart game

};


