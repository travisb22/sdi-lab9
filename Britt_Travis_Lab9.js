// Travis D. Britt
// 3/22/14
// SDI 1403
// Lab 9
// Problems 1-3


var num1 = 5;
var num2 = 1;
var numAsString = "10";
var date1 = "12/10/2014";
var date2 = "12/12/2014";
var d = prompt("Enter days or hours");


/*Problem 1 - Format a number
Create a function that will format a number to a specified number of decimal places.
The function will need to accept two numbers: a number to be formatted and a number that represented decimal places.
It should return the newly formatted number. Don't forget to output the number in a meaningful way.
*/
var numObject = function(num1, num2) {

	var newNum = num1.toFixed(num2);

	return newNum;

};
console.log("The Number has succesfully been changed! " + numObject(num1, num2));

/*Problem 2 - Number vs. String
As you have learned, there is a difference between a number as a string data type and a number as a Number data type. For this task, you will simply need to send a string into the function and return it as a Number. keep in mind that you will need to determine if the string sent into the function is a number before you do the conversion.*/
var numString = function(numAsString) {

	var numAsStringValue = parseFloat(numAsString);

	return numAsStringValue;
};

console.log("The string has been successfully changed to a number! " + numString(numAsString));

/*Problem 3 - Date Differences
Create a function that will find the difference between two dates. This function will require three parameters.
The first two will be dates that you want to compare, and the third will be a string to determine if the function returns hours or days.
The function will then perform the math necessary to nd the difference between the two dates and return the choice as hours or days. Again, remember to output the returned value in a meaningful way.*/
var dateType = function(date1, date2, d) {

	var a = new Date(date1);
	var b = new Date(date2);
	var variationBetweenDates = a - b;

	console.log(variationBetweenDates);

	if (d === "hours") {

		return ((variationBetweenDates / 1000) / 60) / 60;

	} else if (d === "days") {


		return (((variationBetweenDates/1000)/60)/60)/24;

	}

};

console.log("The dates have been successfully changed " + dateType(date1, date2, d));

