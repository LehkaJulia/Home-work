const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
]


function getPrice (products, seasonFunc){

	let copiedProducts = 0 
	
	for(let i=0; i<products.length; i++){
		let clean
		clean = products[i].filter(item => typeof item === "number")
		
		for(let j=0; j<clean.length; j++){
		copiedProducts +=clean[j]
		}
	}

	return typeof seasonFunc === `function` 
	? seasonFunc(copiedProducts)
	: copiedProducts;
	     
}
function summerValue(value){
	return value*0.8;
}

function winterValue(value){
	return value*2;
}

// console.log(getPrice(products, summerValue)); 
// console.log(getPrice(products, winterValue));
// console.log(getPrice(products));

// const getPrice = (products, seasonFunc) => {
//     products = JSON.parse(JSON.stringify(products));
//     let suma = 0;
//     for (let i = 0; i < products.length;i++) {
//         suma += typeof seasonFunc === `function` 
//             ? seasonFunc(products[i][1]) 
//             : products[i][1];
//     }
//     return suma;
// }

// const summerValue = value => value*0.8;
// const winterValue = value =>value*2;


