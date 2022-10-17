//Declare name variable
var name = "kaMRan"
// Get first character of Name
var firstCharacter = name.charAt(0)
// Get Reamining Character of name
var remainingCharacter = name.slice(1)

// output  lower case
console.log("Hello " + name.toLowerCase() + ", would you like to learn some Java Script today?") 
//output upper case
console.log("Hello " + name.toUpperCase() + ", would you like to learn some Java Script today?") 
// output title case
console.log("Hello " + firstCharacter.toUpperCase() + remainingCharacter.toLowerCase() + ", would you like to learn some Java Script today?") 
