
let defaultColor = 'rgb(0,0,0)';
let noColor = '';
let randomColor = '';
let pickedColor = '';
let defaultSize = 16;
let defaultSizeLabel = `${defaultSize}x${defaultSize}`;
let defaultMode = 'default';

const grid = document.querySelector('.container');
const colorMode = document.querySelector('#colormode');
const colorPicker = document.querySelector('#colorpicker');
const multicolorMode = document.querySelector('#multicolormode');
const eraseMode = document.querySelector('#erase');
const gridSize = document.querySelector('#gridsize');
const gridLabel = document.querySelector('#gridlabel');
const clearGrid = document.querySelector('#clear');


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

 //erase button
clearGrid.addEventListener('click', () => {
    reloadGrid();
    createGrid(defaultSize);
    });


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


// choose color from color picker
function colorSelection(e) {
    pickedColor = e.target.value;
};

colorPicker.addEventListener('input', colorSelection);


// choose a random color
function newColor() {
    const arrayOfColor = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let randomColorString = '#';

    for (let x = 0; x < 6; x++) {
        let index = Math.floor(Math.random() * 16)
        let value = arrayOfColor[index]

        randomColorString += value
    }

    randomColor = randomColorString;
}


colorMode.addEventListener('click',(e) => defaultMode ='default');
colorPicker.addEventListener('click',(e) => defaultMode ='color');
multicolorMode.addEventListener('click', (e) => defaultMode ='multicolor');
eraseMode.addEventListener('click', (e) => defaultMode ='eraseMode');


 //change color of cells
 function changeColor(e) {
     if (e.type === 'mouseup' && e.type === 'mouseover') return;
    if (defaultMode == 'default') {
         e.target.style.backgroundColor = defaultColor;
    } else if (defaultMode == 'color') {
        e.target.style.backgroundColor = pickedColor;
        colorMode.addEventListener('click',(e) => defaultMode ='color');
     } else if (defaultMode == 'multicolor') {
        newColor();
        e.target.style.backgroundColor = randomColor;
     } else if (defaultMode = 'eraseMode') {
         e.target.style.backgroundColor = noColor;
     } 

};
 



window.onload = () => {
    createGrid(defaultSize);
    gridLabel.innerHTML = defaultSizeLabel;
};