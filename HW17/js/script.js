let allLastLi = document.querySelectorAll(`li:last-of-type`);

setTimeout(() =>allLastLi.forEach(li => li.classList.add(`last`)), 2000);

function setFirstItemClassName(level,ul){
    level--;
    let listLi= ul.querySelector(`li:first-of-type`)
    listLi.classList.add(`first`)
         
    if(level>0){
        const ulChildren = [...ul.children];
        ulChildren.forEach(li => {
            let ulInners = [...li.children]
            ulInners.forEach(ulInner=> setFirstItemClassName(level, ulInner), 2000)
        })
        
    }
}

const rootUL = document.querySelector("ul.root");
setTimeout(() =>setFirstItemClassName(2, rootUL), 2000)