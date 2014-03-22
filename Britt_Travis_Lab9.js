//alert("JavaScript works!");
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

var numString = function(numAsString) {

	var numAsStringValue = parseFloat(numAsString);

	return numAsStringValue;
};

console.log("The string has been successfully changed to a number! " + numString(numAsString));

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

