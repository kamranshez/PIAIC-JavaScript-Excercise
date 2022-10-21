var string1 = "this is first string"
var string2 = "this is second string"

var number1 = 10
var number2 = 20

var myArr =[1,2,3]

console.log(string1)
console.log(string2)

//equlity and inequlity string 
console.log(string1 === string2)
console.log(string1 != string2)

console.log(string1 === string1.toLowerCase())

// equalit and inequliaty number 
console.log(number1 === number2)
console.log(number1 != number2)
console.log(number1 < number2)
console.log(number1 > number2)
console.log(number1 <= number2)
console.log(number1 >= number2)
// And or 
console.log(string1 === string2 || number1 === number2)
console.log(string1 === string2 && number1 === number2)

console.log(Array.isArray(myArr))
console.log(!Array.isArray(myArr))