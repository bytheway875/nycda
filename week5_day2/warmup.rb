Warmup
All of these questions can be answered using the concepts we were introduced to in class yesterday. It will be helpful to open the pdf lecture slides from Canvas to refer to.


1.Create an array of food items called foods. Loop through each element and print out I like to eat… with each element.

food = ["pizza", "hamburger", "hotdog"]
puts food

food.each do  |item|
	puts items
end





2.Create a class called User.
Allow the user to be initialized with a first_name, last_name, and 
whether or not the user is an admin(boolean value)
The user should be able to get and set first_nameand last_name. 
Make a method that returns the full name of the user.
The user should be able to get BUT NOT SET the value for admin
Instead, create a method called toggle_admin that toggles the value
 of admin 
Toggling means that a true value will become false and a false value 
will become true when executed.


class User
	def initalized
		put first_name
	
















3.Take the following string: 
"Kayla. Darren. Michael. Elizabeth"
Transform it into a string that looks like this, instead: 
"Kayla, Darren, Michael, Elizabeth"
There are TWO different strategies we learned yesterday that can help you accomplish this in just one line of code! Bonus points if you can implement both solutions~
Implement FizzBuzz using recursion (a method that calls itself!). 
Print Fizz for numbers divisible by 3
Print Buzz for numbers divisible by 5
Print FizzBuzz for numbers divisible by 15

