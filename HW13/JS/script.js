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

function convert(object){
    let newObj = {}
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
// const convert = list => {
//     let newObj = {};

//     for (let key in list) {
//         if(typeof list[key] === 'object'){
//             Object.assign(newObj, convert(list[key]))
//         } else{
//             newObj[key] = list[key];
//         }
//     }
//     return newObj;
// }