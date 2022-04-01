
let defaultColor = 'rgb(0,0,0)';
let defaultSize = 16;
let defaultSizeLabel = `${defaultSize}x${defaultSize}`;

const grid = document.querySelector('.container');
const colorMode = document.querySelector('#colormode');
const colorPicker = document.querySelector('#colorpicker');
const multicolorMode = document.querySelector('#multicolormode');
const gridSize = document.querySelector('#gridsize');
const gridLabel = document.querySelector('#gridlabel');



   // choose color from color picker
function colorSelection(e) {
    defaultColor = e.target.value;
};

colorPicker.addEventListener('input', colorSelection);


   // change size label
function changeSizeLabel(e) {
    gridLabel.innerHTML = `${e.target.value}x${e.target.value}`;
}

 //choose grid size
function changeGrid(e) {
    defaultSize = e.target.value;
    reloadGrid();
    createGrid(defaultSize);
}

gridSize.addEventListener('input', changeGrid);
gridSize.addEventListener('input', changeSizeLabel);

 //reload grid
function reloadGrid() {
    grid.innerHTML='';
}


function createGrid(size) {
    //create grid
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    //create cells
    for (i=0; i < size*size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mousedown', changeColor);
        cell.addEventListener('mouseover', changeColor);
        grid.appendChild(cell);
    } 
}

// choose a random color
function newColor() {

    const arrayOfColor = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

    let randomColorString = '#';

    for (let x = 0; x < 6; x++){

    let index = Math.floor(Math.random() * 16)
    let value = arrayOfColor[index]

    randomColorString += value
    }
}

    // choose random color from button
multicolorMode.addEventListener('click', (e) => newColor);

 //change color of cells
 function changeColor(e) {
    e.target.style.backgroundColor = defaultColor;
}




window.onload = () => {
    createGrid(defaultSize);
    gridLabel.innerHTML = defaultSizeLabel;
};