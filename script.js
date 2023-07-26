const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnRgb = document.createElement('button')
const btnGray = document.createElement('button')
const btnSize = document.createElement('button')
const section = document.querySelector('.section');
const buttonsContainer = document.querySelector('.buttons');

window.onload = () => {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black'
    }))
}

function creatDivs(col , rows) {
    for(let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div') 
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
        console.log("test");
    }
}
creatDivs(16,16)






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
            let RNum = Math.floor(Math.random() * 255)
            let BlackScale = `rgb(${RNum},${RNum},${RNum})`
            box.style.background = BlackScale;
        }))
    })

    buttonsContainer.appendChild(btnBlack).classList.add("btn")
}

colorBlack();



