const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];


let cheatCode = [];

const body = document.querySelector("body");              


body.addEventListener("keydown", (event) => {                       
    cheatCode.push(event.key);                                         

    if(cheatCode.length == konamiCode.length){                                  
        if(konamiCode.every((value, index) => value === cheatCode[index])){         
            alert("Cheat Code Activated");
            body.style.backgroundImage = "url(laplateforme_.png)";                     
        }
    }
});




  




