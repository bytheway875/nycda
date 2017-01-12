before lunch activity

let's expand on your car class a little bit and make it do some cool stuff

-add a method that returns the make and model to the user

-add a method named "drive" that takes one argument called "miles". Add the amount of miles in to the car' mileage"

-create a method called "resale_value". Create a donditional that uses the mileage to determine and return the resale 
value of the car. Feel free to just make up the dallor value. (ex. milage>10000 might return $500.)


class Car
	attr_accessor :make, :model
	def initialize(make, model)
		@make =make
		@model = model
	end
end

def display_info
	puts "{#make} #{@model}"


	def drive(miles)
		@mileage += miles
	end

	def resale_value
		if mileage > 100000
			"Not be worth much."
		else "Might be worth something."
		end
	end 

