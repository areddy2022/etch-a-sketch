const board = document.querySelector(".board");
const button = document.querySelector("button");
const input = document.querySelector("input");

createGrid();

button.addEventListener("click", () => {
    clearBoard();
    let gridsize = input.value;
    document.querySelector("input").value = '';
    createGrid(gridsize);
})

function createGrid(gridsize = 100) {
    for (let i = 0; i < gridsize; i++) {
        let rowdiv = document.createElement("div");
        rowdiv.className = "row";
        for (let j = 0; j < gridsize; j++) {
            let columndiv = document.createElement("div");
            columndiv.className = "col";
            rowdiv.appendChild(columndiv);
        }
        board.appendChild(rowdiv);
    }
}

function clearBoard() {
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

board.addEventListener("mouseover", (event) => {
    target = event.target;
    if(target.className != "board"){
        target.style.background = "black";
    }
})