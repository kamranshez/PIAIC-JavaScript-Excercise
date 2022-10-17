var userNames = ["admin", "user1" , "user2" , "user3", "user4"]

for (var index = 0; index < userNames.length; index++) {
    
    if (userNames[index] === "admin") {
        
        console.log("Hello " + userNames[index] + " , would you like to see a status report")
        
    } else {
        
        console.log("Hello " + userNames[index] + " , Welcome to user section")
        
    }
    
}