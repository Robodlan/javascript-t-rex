

document.addEventListener("DOMContentLoaded", () => {
   const dino =  document.querySelector(".dino");
   const grid =  document.querySelector(".grid");
   let gravity = 0.9;

   function control(e) {
    if (e.code === "Space") {
        console.log("jump");
        jump()
    }
}
    let position = 0;
    function jump() {
        let count = 0;
        let timerId = setInterval( () => {
         if (count === 15){
            clearInterval(timerId);
            let downTimer = setInterval( ()=> {
                position -= 5;
                position = position * gravity;
                dino.style.bottom = position + 'px';
            }, 20)
         }
           // move up
           position += 30;
           count++;
           position = position * gravity;
           dino.style.bottom = position + 'px';
        }, 20)
       };

       document.addEventListener("keyup", control);
});



    

    


