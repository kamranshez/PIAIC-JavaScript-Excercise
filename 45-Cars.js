
function car(manufacturer, modelName, variant=""){

    var carObj ={manufacturer:manufacturer , model:modelName, variant }

    return carObj
}


var car1 = car("Toyota", "Corolla", {color:"red",engine:"hybrid"} )
console.log(car1)

var car2 = car("Honda", "City", {gear:"automatic",breaks:"disc"} )
console.log(car2)