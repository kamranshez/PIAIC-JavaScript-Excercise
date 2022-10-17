function sandwichOrder(items){
    
    var personalItems = items.slice()
    var ingredients=""
    for (var index = 0; index < personalItems.length; index++) {
      
        ingredients = ingredients +  "," + personalItems[index]
    
    }

    return ingredients
}

sandwitch1 = ["chicken" , "Mayo"]
sandwitch2 = ["egg", "katchup", "sauce"]
sandwitch3 = ["garlic", "mushroom", "sauce","Mayo"]

console.log("Items of sandwitch 1 are " + sandwichOrder(sandwitch1))
console.log("Items of sandwitch 2 are " + sandwichOrder(sandwitch2))
console.log("Items of sandwitch 3 are " + sandwichOrder(sandwitch3))
