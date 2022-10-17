var guestListArr = ["Ali" , "Ahmad", "Daniyal"];

console.log(guestListArr[0] + " is invited for dinner" )
console.log(guestListArr[1] + " is invited for dinner" )
console.log(guestListArr[2] + " is invited for dinner" )

 guestListArr[1] = "Imran"

console.log(guestListArr[0] + " is confirm for dinner" )
console.log(guestListArr[1] + " is confirm for dinner" )
console.log(guestListArr[2] + " is confirm for dinner" )

guestListArr.unshift("Murtaza");
guestListArr.splice(2,0,"Asif")
guestListArr.push("Usama");

console.log("Wow We got big table for dinner")
console.log(guestListArr[0]  + " is also invited for dinner")
console.log(guestListArr[2]  + " is also invited for dinner")
console.log(guestListArr.slice(-1)  + " is also invited for dinner")

console.log(guestListArr)