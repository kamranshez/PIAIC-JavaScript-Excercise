function make_album(artist , title , track = 10) {


    return {artistName:artist , titleName:title, noOfTrack:track}
    
}

console.log(make_album("Ali Azmat" , "Azadi"))
console.log(make_album("Junaid Jamshed" , "Aitbar", 12))
console.log(make_album("Banny" , "Dewaana"))