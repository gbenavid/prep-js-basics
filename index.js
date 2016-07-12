// #1: create varibles using string text/
var firstName = "Gina";
var lastName = "Benavidez";
var birthPlace = "Oregon";
console.log(firstName);
console.log(lastName);
console.log(birthPlace);

//* #2 create Variables with a Number as their value/
var favoriteNumber = 2016;
var currentYear = 2016;
var thatOnePrinceSong = 1999;
console.log(favoriteNumber);
console.log(currentYear);
console.log(thatOnePrinceSong);

//* #3 Variables with Boolean values//
var isDaytime = false;
var isLeftHanded = false;
var inHawaii = true;
var isHappyCoding = true;
console.log(isDaytime);
console.log(isLeftHanded);
console.log(inHawaii);

//** #4 Variables with null/
var enrolledAtDevLeague = null;
var completedFridayPrep = null;
console.log(enrolledAtDevLeague);
console.log(completedFridayPrep);

//** #5a Variables with an Array for it's value./
var westCoast = ["WA","OR","CA", "HI"];
console.log(westCoast);
//** #5b Variables with an Array for it's value. 
var evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(evenNumbers);

//** #6a Arithmetic Variables with the outcome of an arithmetic operation/
var sumOfNumbers = 5+5+5;
var subtractionOfNumbers = 10-1;
var multiplicationOfNumbers = 3*3;
var divisionOfNumbers = 9/3;
console.log(sumOfNumbers);
console.log (subtractionOfNumbers);
console.log(multiplicationOfNumbers);
console.log(divisionOfNumbers);
//** #6b Comparisons & Logic Variables with the outcome of a comparison operation:/
var isEqual = "Tacocat" == "tacocat";
console.log(isEqual)//false.
//* BONUS: See if you can come up with a few examples of double comparison operator(==) vs triple comparison operator(===)./
var CompareMe = "5" === 5;
var CompareMeToo = "five" == "5"; 
console.log(CompareMe); // false.
console.log(CompareMeToo); // false.
//* #6c Assignments Variables with the outcome of an assignment operation:
var generalContainer = ["starfruit", "lychee", "dragon fruit", "mango", "papayas"];
console.log(generalContainer [4]);

//* #7a Declare Functions
function jump (height) {
	console.log("You jumped " + height + " feet high!");
	return "You jumped " + height + " feet high!";
}
jump(9);
console.log(jump(9));
//* #7b
function cook(ingredient1, ingredient2, recipeName){
	return ingredient1 + " and " + ingredient2 + " make a " + recipeName + "!";
}
var dinner = cook("natto", "uni", "pizza");
console.log(dinner);