const body = document.querySelector(`body`);
const myDiv = document.querySelector(`.block`);
let height = body.clientHeight-100;
let width = body.clientWidth-100;
myDiv.style.left = 0;
myDiv.style.top = 0;
myDiv.style.backgroundColor = `#000000`;
const setBgDiv = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    myDiv.style.backgroundColor = "#" + randomColor; 
}

function getRandomHight() {
    return Math.round(Math.random()*height);
}

function getRandomWidth() {
    return Math.round(Math.random()*width);
}
const coloringBlock = setInterval(setBgDiv, 500);
const movingBlock = setInterval(() => {
    myDiv.style.left = (getRandomWidth())+ `px`;
    myDiv.style.top =  (getRandomHight()) + `px`;
}, 1000);