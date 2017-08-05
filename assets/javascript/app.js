//This keeps track of the scores
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let choice;
let countStartNumber = 0;

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

for (var i = 0; i < questions.length; i++) {
  // questions[i]
  //Scroll through the questions
  //Take users answer
  //Compare with correct answer
  //Add to score tally
  console.log(questions[i].q);
};

function timer(){
  // $(".timer").html("<b>30 Seconds left</b>");
  var second = 1000;
  let timeLeft = 10;
function less(){
  if (timeLeft == 1) {
    console.log("Time is up");
  clearTimeout(tid);    
  } else {
  timeLeft--;
  console.log(timeLeft);
  // return timeLeft;
  }
}

 var tid = setInterval(less, 1000);
  $(".timer").html("<b>" + timeLeft + " Seconds left</b>");
  // console.log(timeLeft)
    // setTimeout(function(){ x.value= "1 seconds" }, 1000); 
}

function abortTimer() { 
  clearTimeout();
}
//Start function
function startGame(){
  alert("You will have 30 seconds for each question. \n You can now begin the game");
  timer();
}
$('.start').click(startGame);
$('.clear').click(abortTimer);


function resetScore(){
  correct = 0;
  incorrect = 0;
  unanswered = 0;
  choice = null;
  countStartNumber = 0;
}