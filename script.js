const container = document.querySelector('.container');
let penColor = 1 //black;
let currSize = 16; //default size

function createCells() {
    for (let i = 0; i < currSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.append(row);

        for (let j = 0; j < currSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', changeColor);
            row.append(cell);
        }
    }
}

function clearCanvas() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    })
    createCells(currSize);
}

function changeColor() {
    console.log(penColor);
    if (this.classList.contains('hover')) {
        if (Number(this.style.opacity != 1)) {
            this.style.opacity = 0.2 + Number(this.style.opacity);
        }
    } else {
        const r = Math.random() * 255;
        const g = Math.random() * 255;
        const b = Math.random() * 255;
        this.classList.add('hover');
        if (penColor == 2) this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        else if (penColor == 0) this.style.backgroundColor = "white";
        else this.style.backgroundColor = "black";
        this.style.opacity = 0.2;
        if (penColor == 0) this.style.opacity = 1;
    }
}

function changeSize() {
    if (this.classList.contains('custom')) {
        currSize = Number(prompt("Enter New Size:"));
        while (currSize > 100 || currSize < 1) {
            currSize = Number(prompt("Please Enter Valid Size [1-100]: "));
        }
    }
    else if (this.classList.contains('16')) currSize = 16;
    else if (this.classList.contains('32')) currSize = 32;
    else currSize = 64;

    clearCanvas();
}

createCells();

document.querySelector('.eraser').addEventListener('click', () => {
    if (penColor != 0) {
        document.querySelectorAll('.cell').forEach(cell => {
            cell.classList.remove('hover');
        })
    } 
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('hover');
    })
    penColor = 0;
})

document.querySelector('.black').addEventListener('click', () => {
    if (penColor != 1) {
        document.querySelectorAll('.cell').forEach(cell => {
            cell.classList.remove('hover');
        })
    }   
    penColor = 1;
})

document.querySelector('.rainbow').addEventListener('click', () => {
    if (penColor != 2) {
        document.querySelectorAll('.cell').forEach(cell => {
            cell.classList.remove('hover');
        })
    }   
    penColor = 2;
})

document.querySelector('.clear').addEventListener('click', clearCanvas)

const sizeChanger = document.querySelectorAll('.size');
sizeChanger.forEach(sizeChangeButton => {
    sizeChangeButton.addEventListener('click', changeSize);
});
