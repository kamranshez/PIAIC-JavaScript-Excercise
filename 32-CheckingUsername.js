var current_users = ["ali" , "ahmad" , "asif" , "amjad", "amir"]
var new_users = ["irfan" , "salman" , "rizwan", "ali" , "asif"]

for (var index = 0; index < new_users.length; index++) {
   
    if (current_users.includes(new_users[index])) {
        
        console.log(new_users[index] + " You will need to enter a new username ")

    } else {

        console.log(new_users[index] +" Username is available ")

    }

}