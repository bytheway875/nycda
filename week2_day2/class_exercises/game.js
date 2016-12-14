function guessingGame(){

	var randomNumber= Math.floor(Math.random() * 100) + 1;
	var guess = prompt("Guess a number between 1 and 100!");
	console.log(guess);
	if(guess == null){
		return
	}

	//-wong  (the guess does NOT equal the ranmdom number)
	//-right (the guess DOES equal the random number
	debugger
	while(randomNumber  != guess){
		if (randomNumber > guess){
			alert("Your guess is too low!");
		}	else {
		    alert("Your guess is too high!");

		}
			guess = prompt("Guess a number between 1 and 100");
	}
	
	alert('You are right');
}


