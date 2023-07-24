const container = document.querySelector('.container');

function createCells(size = 16) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.append(row);

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', changeColor);
            row.append(cell);
        }
    }
}

function changeColor() {
    this.classList.add('hover')
}

function changeSize() {
    const newSize = Number(prompt("Enter New Size:"));
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    })
    createCells(newSize);
}

createCells();

const sizeChanger = document.querySelector('.size');
sizeChanger.addEventListener('click', changeSize);

