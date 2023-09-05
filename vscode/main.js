function toggleMode(){
    const body = document.body

    body.classList.toggle("light")
    
   

    const img = document.querySelector("#profile img")

    if(body.classList.contains("light")){
        body.classList.remove("ligth");
        
        img.src = "imagens/avatar.png"

        
    } else {
        body.classList.add("ligth");
        
        img.src = "imagens/avatar.png"
    }

}