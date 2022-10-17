
function make_shirt(size = "Large" , message = "I love Javascript") {
   
    if (size == "Medium" || size == "Large" ) {
        
        console.log("The T shirt size is " + size + " with  message " + message)
 
    } else {
    
    console.log("The T shirt size is " + size + " with  message of any type")
        
    }

}

//make_shirt("Large", "This is wonderfull Tshirt")
make_shirt("Large")
make_shirt("Medium")
make_shirt("Small")