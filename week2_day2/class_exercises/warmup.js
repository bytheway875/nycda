// i need an array of numbers
// i need to reverse the array
// i need to loop through the reversed array
// inside the loop, i need an if/else statement.
// if the number is greater than 10, i should console.log "more is better"
// if the number is less than 10, i should console.log "less is more"

ver numbers=[2, 4, 6, 8, 10, 12]// Create variables that hold each of these different data types: 
// String
var fruit = "apple";
// Boolean
var hungry = false;
// Integer

var fingers = 10
// Array
var names = ["Tom", "Bob", "Henry"]
// Multidimensional Array
var a = [[1,2],[3,4]]
// Object
var person= {name: "Pearl", hair: "black", eyes: "blue"}

//Fix the problems in each of the following code statements 

//vara = “This is a string with a problem
  var a = "This is a string with a problem"
//var b = [“this, should, be, a, seven, element, array”]
  var b = ["This", "really", "should", "b", "a", "seven", "element"," array"]
//var c = { firstKey: “first” secondKey: “second”, third Key: “third” }
  var c = { firstKey: "first", secondKey: "second", thirdKey: "third" }

function tellMeSomethingNice() { 
	return "You look great!" 
}
  
//function (hello)(name){
	//return name;
//}
function sayHello(Hello, Tommy) {
 return "Hello Tommy!"
}

//function new_function argument {
//	return argument;
//}
function howAreFeeling() {
	return "Okay."
}


--------------------------------------------------
//Below is a list of students and their grades, as well as a list of which grades 
//map to which letter grade. Iterate through each student and print out 
//their name and their letter grade. 
//Name

//Grade

//Luke
//96
//Katie
//78
//Kevin
//46
//Amanda
//84


var studentgrades = [["Luke", 96], ["Katie", 78], ["Kevin", 46], ["Amanda", 84]]


for (var i = 0; i < studentsgrades.length; i++) {
	var name = studentgrades[i][0];
	var grade = studentgrades[i][1]
	console.log("Name", name, "Grade", grade);

	if () {
		console.log('F')
	} else if (grade >60) {   
		console.log('D')
	} else if (grade >70) {
	console.log('C')
	} else if (grade >80) {
		console.log('B')
	} else if(grade >70){
		console.log('C')
	}
}


//Number Grade
//Letter Grade
//0-59
//F
//60-69
//D
//70-79
//C
//80-89
//B
//90+

numbers.reversed(