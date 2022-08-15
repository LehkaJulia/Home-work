const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
} 
let newObj = {}
function convert(object){
    for(let key in object){
        if(typeof object[key] === 'object'){ 
            newObj = Object.assign(newObj,object[key]);
        } else{
            newObj[key] = object[key];
        } 
    }
        return newObj
}
console.log(convert(obj))
