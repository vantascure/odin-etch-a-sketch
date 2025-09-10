const GRID_WIDTH = 500;
const grid = document.getElementById("grid-container");

function createGrid(size) {
    grid.innerHTML = '';
    const totalCells = size * size;
    const cellSize = GRID_WIDTH / size;

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        grid.appendChild(cell);
    }
}

createGrid(16);