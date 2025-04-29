
function colors(){
    fetch("https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome-dark&count=4")
.then(response => response.json())
.then(function(data){
    data.colors.forEach(color => {
        console.log(data.colors[0])
    });
})

}

colors()