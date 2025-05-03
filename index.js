
function colors(){
    fetch("https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome-dark&count=4")
.then(response => response.json())
.then(function(data){
    for(let i = 0; i < data.colors.length; i++){

        console.log(`This is the color I choose ${data.colors[i].hex.value}`)
        
    }
})

}

colors() 