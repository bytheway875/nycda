// i need an array of numbers
// i need to reverse the array
// i need to loop through the reversed array
// inside the loop, i need an if/else statement.
// if the number is greater than 10, i should console.log "more is better"
// if the number is less than 10, i should console.log "less is more"

ver numbers=[2, 4, 6, 8, 10, 12]

numbers.reversed();

for (var i = 0; i < number.length; i++) {
	if(numbers[i]  < 10 ){
		console.log("Less is more");
		else {
			console.log("More is better");
		}
	}

	//local scope example:
	
}var z = 3;

function someF() (
	var z = 20;
	console.log(z);
}
someF()
>>20

console.log(z);
>>3
	




