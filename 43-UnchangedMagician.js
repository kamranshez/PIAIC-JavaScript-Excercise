var originalMagician= ["Ali" , "Ahmad" , "Amir"]

function show_magician(magicianName) {
    
    console.log(magicianName)
}

function make_great(magicianName) {

    var greateMagician = magicianName.slice()
    
    for (var index = 0; index < greateMagician.length; index++) {
        
        greateMagician[index] = "Great Magician " +  greateMagician[index]
        
    }

    return greateMagician
}
// it will show original magician name
show_magician(originalMagician)
//it will show greate magician name

show_magician(make_great(originalMagician))