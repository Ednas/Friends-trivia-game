//This keeps track of the scores
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let choice;
let countStartNumber = 0;

//Text that says "Click to start the game"

//Questions Array
var questions = [{
  q: "How many seasons are there of Friends?",
  answer: ['10', '17', '4', '9'],
  correct: "10",
  images: "assets/images/friends.jpg"
}, {
  q: "What acress played Rachel?",
  answer: ['Jennifer Love Hewitt', 'Julia Roberts', 'Jennifer Aniston', 'George Tekei'],
  correct: "Jennifer Aniston",
  images: "assets/images/friends.jpg"
}, {
  q: "What was the name of the coffee shop they used to go to?",
  answer: ['Central Coffee', 'Central Park', 'Central Perk', 'Central Tea'],
  correct: "Central Perk",
  images: "assets/images/friends.jpg"
}];

function newGame() {

  alert("You will have 30 seconds for each question. \n You can now begin the game");
  $(".timer").append("<b>Timer: 00:00</b>");


    // $('#answer-button').click()
     timer = setInterval(game.countdown, 1000);
     let panel = document.getElementsByClassName('.question');
     console.log(questions[0].q);
     $(".question").html('<h2>' + questions[0].q + '</h2>' );
     // for (var i = 0; i<questions[this.q].answers.length; i++){
     //   panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
     // }

  for (var i = 0; i < questions.length; i++) {
console.log(questions[i].q);
console.log(questions[i].answer);
console.log(questions[i].correct);
      //If correct answer
      //Get click event
      //add 1 to correct counter
      //show correct answer message
      //Give 5 seconds before moving to next question
      //If last question, go to final message
      //If wrong answer
      //Get click event
      //add 1 to incorrect counter
      //show incorrect answer message
      //Give 5 seconds before moving to next question
      //If last question, go to final message
      //If unanswered
      //Get click event
      //add 1 to unanswered counter
      //show unanswered answer message
      //Give 5 seconds before moving to next question
      //If last question go to final message		

    if (questions[i].correct === choice) {
      correct++;
      console.log("Correct: " + correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered);
    } else if (choice === null) {
      unanswered++;
      console.log("Correct: " + correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered);
    } else {
      incorrect++;
      console.log("Correct: " + correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered);
    }
  }
}
 //end newGame function

$('.start').click(newGame);

// 	//Button that starts the game
// 	// question appears
$(".question").each(function(index, questions) {

  for (var i = 0; i < questions.length; i++) {
    questions[i]
    console.log(questions[i]);
  }

  $(".questions").show("complete");
  console.log('Wow');
});


//need to show answers

var game = {
    questions: questions,
    currentQuestion: questions[0],
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,
    countdown: function() {
      game.counter--;
      $('#counter-number').html(game.counter);

      if (game.counter === 0) {
        console.log('TIME UP');
        game.timeUp();
      }
    
  },
  //timer needs to start
  // timer counts down from 30sec
   loadQuestion: function(){
     timer = setInterval(game.countdown, 1000);
     var panel = document.getElementByClassName('Timer');
     console.log(panel);
     panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
     for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
       panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
     }
     }
     }//,
  //  timeUp: function (){
  //    clearInterval(timer);
  //    $('#counter-number').html(game.counter);

  //    panel.html('<h2>Out of Time!</h2>');
  //    panel.append('<h3>The Correct Answer was: ' + questions[this.currentQuestion].correctAnswer);
  //    panel.append('<img src="' + questions[this.currentQuestion].image + '" />');

  //    if (game.currentQuestion === questions.length - 1){
  //      setTimeout(game.results, 3 * 1000);
  //    } else {
  //      setTimeout(game.nextQuestion, 3 * 1000);
  //    }
  //  }



  //After last question, 
  //show counter message
  //reset button underneath
  // function end() {
  //   $('.score').append("<div>Correct Answers: " + correct + "\n");
  //   $('.score').append("<div>Incorrect Answers: " + incorrect + "\n");
  //   $('.score').append("<div>Timed out: " + unanswered + "\n");
  // };

function reset() {
  //TODO - Make a clear all divs 
  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;
  //	$(correct, incorrect, unanswered) = 0;
  console.log("score: " + correct + incorrect + unanswered);
};
$('.resetbtn').click(reset);
