var magicianArr= ["Ali" , "Ahmad" , "Amir"]

function show_magicians(magicianName) {
    
    console.log(magicianName)
}

function make_great(magicianName) {

    for (var index = 0; index < magicianName.length; index++) {
        
        magicianName[index] = "Great Magician " +  magicianName[index]
        
    }

    return magicianName
}

show_magicians(make_great(magicianArr))
