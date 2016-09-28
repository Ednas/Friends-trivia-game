//Need html doc to house game --> index.html

$(document).ready(function(){
	//Text that says "Click to start the game"

//Questions Array
var questions = [
{
	q1 :"How many seasons are there of Friends?",
	answer : ['10', '17', '4', '9']
},
{
	q2 :"What acress played Rachel?",
	answer : ['Jennifer Love Hewitt', 'Julia Roberts', 'Jennifer Aniston','George Tekei']
},
{
	q3 : "What was the name of the coffee shop they used to go to?",
	answer : ['Central Coffee', 'Central Park', 'Central Perk', 'Central Tea']
}
]

	$('.start').click(newGame);
function newGame()
{
	alert("You will have 30 seconds for each question. \nYou can now begin the game");
	console.log(alert);
}
	//Text that says "Friends Game..." --> index.html
	//Show clock with 00:00 initially
	$(".timer").append("<b>Timer: 00:00</b>");
	//Button that starts the game
	// question appears
	$(".question").each(function(index, questions){
		
		 for (var i = questions.length - 1; i >= 0; i--) {
			questions[i]
		}

		 $(".questions").show("complete");
});   
    

	//need to show answers

	var game = {
		questions:questions,
		currentQuestion,
		counter:countStartNumber,
  		correct:0,
  		incorrect:0,
  		game.counter--;
    	$('#counter-number').html(game.counter);

    	if (game.counter === 0){
      	console.log('TIME UP');
     	game.timeUp();
    	}
	}
	//timer needs to start
	// timer counts down from 30sec
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

	//After last question, 
		//show counter message
		//reset button underneath






//This keeps track of the scores
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;



});