const GRID_WIDTH = 500;
const grid = document.getElementById("grid-container");

function hoverCell(event) {
    const cell = event.target;

    function getRandomColourValue() {
        return Math.floor(Math.random() * 256)
    }

    cell.style.backgroundColor = `rgb(${getRandomColourValue()}, ${getRandomColourValue()}, ${getRandomColourValue()})`;
}

function createGrid(size) {
    grid.innerHTML = '';
    const totalCells = size * size;
    const cellSize = GRID_WIDTH / size;

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.addEventListener("mouseover", hoverCell)
        grid.appendChild(cell);
    }
}

createGrid(16);