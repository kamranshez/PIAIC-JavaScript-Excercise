var guestListArr = ["Ali" , "Ahmad", "Daniyal"];

console.log(guestListArr[0] + " is invited for dinner" )
console.log(guestListArr[1] + " is invited for dinner" )
console.log(guestListArr[2] + " is invited for dinner" )

var countGuest = guestListArr.length
console.log("Numbers guest now" + countGuest)

guestListArr[1] = "Imran"

console.log(guestListArr[0] + " is confirm for dinner" )
console.log(guestListArr[1] + " is confirm for dinner" )
console.log(guestListArr[2] + " is confirm for dinner" )

guestListArr.unshift("Murtaza");
guestListArr.splice(2,0,"Asif")
guestListArr.push("Usama");

countGuest =  guestListArr.length
console.log("Numbers guest now " + countGuest)

console.log("Wow We got big table for dinner")
console.log(guestListArr[0]  + " is also invited for dinner")
console.log(guestListArr[2]  + " is also invited for dinner")
console.log(guestListArr.slice(-1)  + " is also invited for dinner")

countGuest =  guestListArr.length
console.log("Numbers guest now " + countGuest)


console.log("Oops We are late so we can invite two person only ")
console.log(guestListArr.pop() + " your invitation has been cancelled ")
console.log(guestListArr.pop() + " your invitation has been cancelled ")
console.log(guestListArr.pop() + " your invitation has been cancelled ")
console.log(guestListArr.pop() + " your invitation has been cancelled ")

guestListArr.pop()
guestListArr.pop()

console.log(guestListArr)
console.log("Total numbers of Guests are " + countGuest)
