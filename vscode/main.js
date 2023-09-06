function toggleMode(){
    const body = document.body

    body.classList.toggle("light")
    
   

    const img = document.querySelector("#profile img")

    if(body.classList.contains("light")){
        
        
        img.src = "imagens/avatar-light.png"

        
    } else {
        
        
        img.src = "imagens/avatar.png"
    }

}