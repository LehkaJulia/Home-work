const block = document.querySelector(`#block`);
const body = document.querySelector(`body`);
let activeBlock;
let positionLeft = 0,
    positionBottom = 0,
    width = block.clientWidth,
    height = block.clientHeight,
    textBams = `<p class="text">БЕМС</p>`

block.addEventListener(`click`, () => activeBlock = block);

const movingRight = block => {
    if(positionLeft >= (body.clientWidth-block.clientWidth)/2-10){
        positionLeft -= 20
        block.style.left = positionLeft + `px` 
        block.innerHTML = textBams
        setTimeout(()=>{
            block.innerHTML = ``
        }, 20000) 
    }else{
        block.style.left = positionLeft +10+`px`;
        positionLeft +=10;
    }
}
const movingUp = block => {
    if(positionBottom >= (body.clientHeight-block.clientHeight)/2-10){
        positionBottom -= 20
        block.style.bottom = positionBottom + `px` 
        block.innerHTML = textBams
        setTimeout(()=>{
            block.innerHTML = ``
        }, 20000)
        
    }else{
        block.style.bottom = positionBottom +10+`px`;
        positionBottom += 10;
    }
}
const movingLeft = block => {
    if(positionLeft <= -(body.clientWidth-block.clientWidth)/2+10){
        positionLeft += 20
        block.style.left = positionLeft + `px`
        block.innerHTML = textBams
        setTimeout(()=>{
            block.innerHTML = ``
        }, 20000) 
    } else {
        block.style.left = positionLeft - 10  +`px`;
        positionLeft -=10;
    }
}
const movingDown = block => {
    if(positionBottom <= -(body.clientHeight-block.clientHeight)/2+10){
        positionBottom += 20
        block.style.bottom = positionBottom + `px`
        block.innerHTML = textBams
        setTimeout(()=>{
            block.innerHTML = `textBams`
        }, 20000) 
    } else {
        block.style.bottom  = positionBottom - 10  +`px`;
        positionBottom -=10;
    }
}
const movingSpase = block =>{
    block.style.bottom = positionBottom + 10 + `px`
    setTimeout(()=>{
        block.style.bottom = positionBottom - 10 + `px`
    }, 500) 
   
}
const movingCtrl = block=>{
    block.style.height = block.clientHeight  - block.clientHeight*0.4 + 'px'
    block.style.width = block.clientWidth + block.clientWidth*0.25 + 'px'
    setTimeout(()=>{
        block.style.height = width + 'px'
        block.style.width = height + 'px'
    }, 1000)
}

const EVENTS = {
    38: block => movingUp(block),
    39: block => movingRight(block),
    40: block => movingDown(block),
    37: block => movingLeft(block),
    32: block => movingSpase(block),
    17: block => movingCtrl(block)
}

document.addEventListener(`keydown`, event => {
    activeBlock && EVENTS[event.keyCode] && EVENTS[event.keyCode](activeBlock);
})