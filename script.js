const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnRgb = document.createElement('button')
const btnGray = document.createElement('button')
const btnSize = document.createElement('button')
const btnReset = document.createElement('button')
const section = document.querySelector('.section');
const buttonsContainer = document.querySelector('.buttons');

window.onload = () => {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black'
    }))
}

function createDivs(col , rows) {
    for(let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div') 
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}
createDivs(16,16)






//DESIGN


//GRAY
function colorGray () {
    const boxs = container.querySelectorAll(".box");
    btnGray.textContent = "Gray"

    btnGray.addEventListener("click" , () => {
        boxs.forEach(box => box.addEventListener("mouseover", () => {
            let RNum = Math.floor(Math.random() * 255)
            let GrayScale = `rgb(${RNum},${RNum},${RNum})`
            box.style.background = GrayScale;
        }))
    })

    buttonsContainer.appendChild(btnGray).classList.add("btn")
}

colorGray();


//BLACK
function colorBlack () {
    const boxs = container.querySelectorAll(".box");
    btnBlack.textContent = "Black"

    btnBlack.addEventListener("click" , () => {
        boxs.forEach(box => box.addEventListener("mouseover", () => {
            box.style.background = 'black';
        }))
    })

    buttonsContainer.appendChild(btnBlack).classList.add("btn")
}

colorBlack();


//RGB 
function colorRGB () {
    const boxs = container.querySelectorAll(".box");
    btnRgb.textContent = "RGB"
    btnRgb.addEventListener("click" , () => {
        boxs.forEach(box => box.addEventListener("mouseover" , () => {

            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);

            const RGB = `RGB(${R},${G},${B})`;
            box.style.background = RGB;
        }))
    })

    buttonsContainer.appendChild(btnRgb).classList.add("btn")
}

colorRGB();






//RESET
function reset () {
    btnReset.textContent = "Reset"
    const boxs = container.querySelectorAll(".box");

    btnReset.addEventListener("click" , () => {
            
            boxs.forEach (box => {
                box.style.background='white';
            })
        })
        buttonsContainer.appendChild(btnReset).classList.add("btn")
    }

reset();

//RESIZE
function resize(){ //function does not work as intended. supposed to be responsible for resizing functionality
    const boxs = container.querySelectorAll(".box");
    btnSize.textContent = "Grid Size"
    btnSize.addEventListener("click", () => {
        
        let user = prompt("Please Input Grid Size (0-100px:) ")

        if (user === null || user < 1) {
            reset();
            createDivs(16,16);
            colorBlack();
            colorGray();
            colorRGB();
        } 
        
        else {
            reset();
            createDivs(user , user);
            colorBlack();
            colorGray();
            colorRGB();
        }
    })

    btnSize.addEventListener("click", () => { //clears page when user resizes canvas

        boxs.forEach (box => { //this doesn't work
            box.style.background='white';
        })
    })
    buttonsContainer.appendChild(btnSize).classList.add("btn");
}

resize()



