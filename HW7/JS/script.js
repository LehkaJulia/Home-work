let arr = [];
let arrLength
do {arrLength=prompt(`Оберіть довжину масиву від 2 до 10`)

    if(arrLength % 1){
        arrLength= Math.round(arrLength)
    }
  
}while (!arrLength || arrLength < 2 || arrLength > 10)


arr.length=arrLength;

for(i=0; i<=arr.length-1; i++){
    let randomValue = Math.round(Math.random()*10);
    arr[i]=randomValue
}

console.log(arr)

let multiplication = 1;

for (let i = 0; i < arr.length; ++i) {
    multiplication *= arr[i];
}

console.log(multiplication);

//let arr = [], arrLng, mul = 1;

//do {
 //   arrLng = +prompt(`Please, enter array lenght`);
 //   if(arrLng) arrLng = Math.round(Math.abs(arrLng));
//} while (!arrLng || arrLng > 10 || arrLng < 2)

//for(let i = 0; i < arrLng; i++) {
 //   arr[i] = Math.round(Math.random()*10); 
 //   mul *= arr[i];
//}

//console.log(arr);
//console.log(mul);