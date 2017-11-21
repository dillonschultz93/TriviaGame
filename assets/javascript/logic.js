$(document).ready(function() {

  // == OBJECTS ===============================================================

  //Create an object for each question that contains all of the possible
  //questions, images and answers
  var questionOne = {
    //create a property that states a question
    question: "Who invented the printing press?",
    //create a property that contains an image to be displayed with the question
    image:  "<img src='assets/images/printing-press.jpg' alt='printing press' class='u-full-width'>",
    //create an array of answers to the questions
    possibleAnswers: [
      "A. Martin Luther",
      "B. Johannes Gutenberg",
      "C. Leonardo da Vinci",
      "D. Albrecht Dürer"
    ],
    //create a property the contains the index of the correct answer
    correctAnswer: 1
  };

  var questionTwo = {
    question: "Who designed this logo?",
    image: "<img src='assets/images/american-airlines-logo.jpg' alt='logo' class='u-full-width'>",
    possibleAnswers: [
      "A. Paul Rand",
      "B. Michael Bierut",
      "C. Massimo Vignelli",
      "D. Deiter Rams"
    ],
    correctAnswer: 2
  };

  var questionThree = {
    question: "This designer is attributed to the 'International Style' or 'Swiss Style' of graphic design",
    image: "<img src='assets/images/josef_müller_brockmann.jpg' alt='josef müller brockmann' class='u-full-width'>",
    possibleAnswers: [
      "A. Josef Müller-Brockmann",
      "B. Emil Ruder",
      "C. Armin Hofmann",
      "D. Wim Crouwel"
    ],
    correctAnswer: 0
  };

  var questionFour = {
    question: "Who invented movable type?",
    image: "<img src='assets/images/movable_type.jpg' alt='movable type' class='u-full-width'>",
    possibleAnswers: [
      "A. Johannes Gutenberg",
      "B. Shen Kuo",
      "C. Leonardo da Vinci",
      "D. Bì Shēng"
    ],
    correctAnswer: 3
  };

  var questionFive = {
    question: "What is this machine called?",
    image: "<img src='assets/images/linotype.jpg' alt='linotype machine' class='u-full-width'>",
    possibleAnswers: [
      "A. Linotype",
      "B. Automatic Setter",
      "C. Move-a-Type",
      "D. Type-O-Matic"
    ],
    correctAnswer: 0
  };

  var questionSix = {
    question: "Who designed this poster?",
    image: "<img src='assests/images/saul-bass-poster.jpg' class='u-full-width'>",
    possibleAnswers: [
      "A. Deiter Rams",
      "B. Andy Warhol",
      "C. Saul Bass",
      "D. Paul Rand"
    ],
    correctAnswer: 2
  };

  var questionSeven = {
    question: "Who designed the typeface called Garamond?",
    image: "<img src='assests/images/garamond.jpg' class='u-full-width'>",
    possibleAnswers: [
      "A. Nicolas Jenson",
      "B. Claude Garamond",
      "C. Francesco Griffo",
      "D. William Caslon"
    ],
    correctAnswer: 1
  };

  var questionEight = {
    question: "This image is an example of what kind of communication?",
    image: "<img src='assests/images/ideograms.gif' class='u-full-width'>",
    possibleAnswers: [
      "A. Pictograms",
      "B. Alphabet",
      "C. Phonograms",
      "D. Ideograms",
    ],
    correctAnswer: 3
  };

  var questionNine = {
    question: "Who designed the typeface called Helvetica?",
    image: "<img src='assests/images/helvetica.jpg' class='u-full-width'>",
    possibleAnswers: [
      "A. Adrian Frutiger",
      "B. Paul Renner",
      "C. Max Miedinger",
      "D. Hermann Zapf",
    ],
    correctAnswer: 2
  };

  var questionTen = {
    question: "Who designed this logo?",
    image: "<img src='assests/images/IBM-logo.jpg' class='u-full-width'>",
    possibleAnswers: [
      "A. Paul Rand",
      "B. Milton Glaser",
      "C. Alvin Lustig",
      "D. David Carson"
    ],
    correctAnswer: 0
  };

  // == GLOBAL VARIABLES ======================================================

  //stores all of the question objects
  var questionArray = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
    questionSix,
    questionSeven,
    questionEight,
    questionNine,
    questionTen
  ];

  //create a variable that stores the index of the questionArray
  var questionIndex;

  //score keeping
  var correct = 0;
  var wrong = 0;
  var unanswered = 0;

  //user guess
  var userGuess;

  //stores the messages that display upon a user's guess
  var correctMessage = "Correct!";
  var wrongMessage = "Nah, dude. That's not the right answer";

  // == FUNCTIONS =============================================================

  function startNewGame() {
    //reset the score keeping variables
    correct = 0;
    wrong = 0;
    unanswered = 0;
    //empty out the div that contains the score card
    $("#score").empty();
    //run the displayQuestions() function
    displayQuestions();
  }
  //a function that displays the current question
  function displayQuestions() {
    console.log("Start button clears");//debugging
    //remove the start button
    $("#button-container").empty();
    //set the index to the question array to 0
    questionIndex = 0;
    //display the time reamaining

    //display the question at the current index
    $("#question").append('<h2 class="question-displayed">' + questionArray[questionIndex].question + '</h2>');
    //display the image associated with the question and display a horizontal rule
    $("#question").append(questionArray[questionIndex].image);
    $("#question").append('<hr>');
    console.log("Question and image are displayed"); //debugging
    //display the answers associated with the question using a for loop
    for(var i = 0; i < questionArray[questionIndex].possibleAnswers.length; i++) {
      //set a variable to represent a button
      var answerButtons = $("<button>");
      //insert the possible answers from the question object
      answerButtons.text(questionArray[questionIndex].possibleAnswers[i]);
      answerButtons.addClass("u-full-width")
      //append the buttons to the #answers div
      $("#answers").append(answerButtons)
    }

  }

  $("#start-button").click(function() {
    startNewGame();
  });
});
