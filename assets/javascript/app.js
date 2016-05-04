//I think I need this function to start the game
$(document).ready (function(){


//This keeps track of the scores
var function scores() {
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
}

//Questions Array
var questions 
{
{
	"q1" :"How many seasons are there of Friends?"
	"answer" : ['10', '17', '4', '9'];
}
{
	"q2" :"What acress played Rachel?"
	"answer" : ['Jennifer Love Hewitt', 'Julia Roberts', 'Jennifer Aniston','George Tekei'];
}
{
	"q3" : "What was the name of the coffee shop they used to go to?"
	"answer" : ['Central Coffee', 'Central Park', 'Central Perk', 'Central Tea'];
}
{
	"q4" : "What is Pheobe's signature song?"
	"answer" : ['Robot Chicken', 'Dancing Cats', 'Warm Kitty', 'Smelly Cat'];
}
{
	"q5" : "Which two characters are siblings?"
	"answer1" : ['Rachel and Joey', 'Rachel and Chandler', 'Pheobe and Ross', 'Rachel and Ross'];
}
{
	"q6" : "What is Ross Geller's docorate in?"
	"answer" : ['Proctology', 'Palentology', 'History', 'Philosophy'];
}
{
	"q7" : "What is Joey's catch-phrase?"
	"answer" : ['Have mercy!', 'Holy macrel', 'How you doin', 'Psych'];
}
{
	"q8" : "What is Chandler Bing's middle name?"
	"answer" : ['Muriel', 'Matthew', 'Stan', 'Stark'];	
}
{
	"q9" : "Who does Monica marry and have adopted twins with?"
	"answer" : ['Ross', 'Gunner', 'Chandler', 'Joey'];
}
{
	"q10" : "Who gives birth to triplets?"
	"answer" : ['Joey', 'Monica', 'Rachel', 'Pheobe'];
}
}

//I need somthing here to keep the game going 
//- if answer correct - display correct screen - if wrong say wrong
//probably is a loop
    $("#button").click(function(){
        $("question").append(('questions[]'++)); //figure how to go through each question in array and display it


//Just to see if the questions load
console.log (questions[0])
//Timer for the game
var function timer(argument) {
	$('timer') = Math.floor(t/60);
	var seconds = 30;

}
//Restarts the game
var reset = {
	$('resetbtn').clearInterval(counter);
}
});