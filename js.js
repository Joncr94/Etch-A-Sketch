let buttons = document.querySelectorAll("button");
let submit = document.querySelector(".alter");
let change = document.querySelector(".number");
let red = document.querySelector('.red');
let orange = document.querySelector('.orange');
let black = document.querySelector('.black');
let dark = document.querySelector('.dark');
let normalColor = document.querySelector('.normalcolors')
let darken = false;

function placeSquares(size) {
    let board = document.querySelector(".board");
    
    let squares = document.querySelectorAll('.board div');
    squares.forEach((div)  => div.remove());
    board.style.gridTemplateColumns  = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows  = `repeat(${size} , 1fr)`;
    let amount = size * size;
    for (let i = 0; i < amount; i++){
        let square = document.createElement("div");
        square.style.backgroundColor = "blue";
        square.style.border = "2px solid";
        board.insertAdjacentElement("beforeend", square);
        
        
        dark.addEventListener("click",  () => {
            darken = true
            if (darken === true) {
            square.addEventListener ("mouseover", () => {
                    let currentBrightness = orange.style.brightness || 100;
                    currentBrightness = parseInt(currentBrightness) - 10;
                    if (currentBrightness >= 0 ) {
                        square.style.filter = `brightness(${currentBrightness}%)`;
                        orange.style.brightness = currentBrightness;   
                
            }
        })
    }
    })
        orange.addEventListener("click",  () => { 
            square.addEventListener ("mouseover", () => {
                square.style.backgroundColor = "orange";
                
        })
    });

        red.addEventListener("click", () => {
            square.addEventListener ("mouseover", () => {
                square.style.backgroundColor = "red"; 
         })

    });

        black.addEventListener("click", () => {
        square.addEventListener ("mouseover", () => {
        square.style.backgroundColor = "black";
        })
    });

    
}   

}

submit.addEventListener ("click", () => {
    if  (change.value > 100) return "Error";
    placeSquares (change.value);
});




placeSquares(16);