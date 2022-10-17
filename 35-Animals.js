var animals = ["goat", "cow", "sheep"]
 
for ( var index = 0; index < animals.length; index++) {
    
    console.log(animals[index])
    
}

var animalObj = { goat:"is sweet", cow:"is healthy" , sheep: "is beautiful"}
                   

for (var key in animalObj) {
    
    console.log(key + " " + animalObj[key] )
    
    }

    
console.log(animalObj.goat + " " + "can be a useful pet")

                


