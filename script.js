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
    if (this.classList.contains('hover')) {
        if (Number(this.style.opacity != 1)) {
            this.style.opacity = 0.1 + Number(this.style.opacity);
        }
    } else {
        const r = Math.random() * 255;
        const g = Math.random() * 255;
        const b = Math.random() * 255;
        this.classList.add('hover');
        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        this.style.opacity = 0.1;
    }
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

