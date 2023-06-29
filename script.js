let color = "black";

document.addEventListener("DOMContentLoaded", function(){
    sizeOne();
})

function sizeOne() {
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns = `repeat(16,1fr)`;
    board.style.gridTemplateRows = `repeat(16,1fr)`;
    
    let numDivs = 16 * 16;
        
    for(let i = 0; i < numDivs; i++) {
        let divs = document.createElement("div");
        divs.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", divs);
    }
}
