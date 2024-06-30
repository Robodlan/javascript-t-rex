let position = 0;

document.addEventListener("DOMContentLoaded", () => {
   const dino =  document.querySelector(".dino");
   const grid =  document.querySelector(".grid");

   function control(e) {
    if (e.code === "Space") {
        console.log("jump");
        jump()
    }
}

    function jump() {
        let timerId = setInterval( () => {
   
           // move up
           position += 30;
           dino.style.bottom = position + 'px'
        }, 20)
       };

       document.addEventListener("keyup", control);
});



    

    


