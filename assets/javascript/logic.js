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
    image: "<img src='assets/images/saul-bass-poster.jpg' alt='Anatomy of a murdered poster' class='u-full-width'>",
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
    image: "<img src='assets/images/garamond.jpg' alt='Garamond type speciman' class='u-full-width'>",
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
  var questionIndex = 0;

  //score keeping
  var correct = 0;
  var wrong = 0;
  var unanswered = 0;

  //stores the time for the timer() function
  var seconds = 15;
  var intervalId;

  //user guess
  var userGuess;

  //stores the messages that display upon a user's guess
  var correctMessage = "Correct!";
  var wrongMessage = "Nah, dude. That's not the right answer";
  var outOfTime = "Out of time!";

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
    $("#time-remaining").empty();
    $("#question").empty();
    $("#answers").empty();
    $("#message").empty();
    //display the time reamaining using the timer() function
    timer();
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
      answerButtons.attr({"data-answer-index": i});
      answerButtons.addClass("u-full-width user-guess");
      //append the buttons to the #answers div
      $("#answers").append(answerButtons);
    }
    //detect a user's guess upon a button click
    $(".user-guess").click(function(){
      //get the specific index of that answer and save it to the userGuess variable
      userGuess = $(this).data('answer-index');
      //stop the timer
      clearInterval(intervalId);
      console.log(userGuess);//debugging
      //display the correct answer using the displayAnswer() function
      displayAnswer();
    });
  }

  //a function that counts down from 25 in one second intervals
  function timer() {
      intervalId = setInterval(function() {
        //decrease the seconds by one every second
        seconds--;
        //adds an h3 element that displays the current seconds remaining to guess
        $("#time-remaining").html("<h3 class='time-displayed'>Time Remaining: " + seconds + " seconds</h3>");
        console.log("Time is being displayed"); //debugging
        //stops the interval when the value of seconds reaches 0
        if(seconds < 1) {
          clearInterval(intervalId);
          displayAnswer();
        }
      }, 1000);
  }

  //a function that displays the correct answer
  function displayAnswer() {
    //create a variable that stores the current answer index
    var answerIndex = questionArray[questionIndex].correctAnswer;
    //an if statement that checks to see if the user's guess is the same as the answer index
    if(userGuess === answerIndex) {
      //add one to the correct score variable
      correct++;
      console.log("Correct!"); //debugging
      //display the correct answer
      $(".user-guess").addClass("u-full-width user-guess correct-guess");
      //display a message below the question image
      $("#message").html("<p class='message-displayed'>" + correctMessage + "</p>");
      //...else if the user's guess doesn't match add one to the incorrect score variable
    } else if(userGuess !== answerIndex) {
      wrong++;
      console.log("Wrong!"); //debugging
      //display a message below the question image
      $("#message").html("<p class='message-displayed'>" + wrongMessage + "</p>");
      //...else if the user doesn't guess anything, then add one to the unanswered score variable
    } else {
      unanswered++;
      console.log("No Answer!"); //debugging
      //display a message below the question image
      $("#message").html("<p class='message-displayed'>" + outOfTime + "</p>");
    }

    //an if statement that goes on to the next question in the array
    if(questionIndex === (questionArray.length-1)) {
      //setTimeOut() to delay the display of the score screen
      console.log("End of game"); //debugging
    //...else move on to the next question
    } else {
      questionIndex++;
      //delay displaying the next question by 3 seconds
      setTimeout(displayQuestions, 1000 * 3);
      //set the time back to 15 seconds
      seconds = 15;
    }
  }

  // == MAIN PROCESSES ========================================================

  $("#start-button").click(function() {
    startNewGame();
  });
});
