document.addEventListener("DOMContentLoaded", () => {
   const dino =  document.querySelector(".dino");
   const grid =  document.querySelector(".grid");
   let gravity = 0.9;
   let isJumping = false;

   function control(e) {
    if (e.code === "Space") {
        if (!isJumping) {
            jump();
        };
    }
}
    let position = 0;
    function jump() {
        isJumping = true;
        let count = 0;
        let timerId = setInterval( () => {
         if (count === 15){
            clearInterval(timerId);
            let downTimer = setInterval( ()=> {
                if (count === 0) {
                    clearInterval(downTimer);
                    isJumping = false
                }
                position -= 5;
                count--;
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

       function generateObstacles() {
        
       }

       document.addEventListener("keyup", control);
});



    

    


