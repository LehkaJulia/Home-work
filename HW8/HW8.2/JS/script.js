let sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];


console.log(sports)
let winter_sports = sports.slice(0,2).concat(sports.slice(3,5))
console.log(winter_sports)

let winte_array
let winter


let summer_sports = sports.slice(5,7).concat(sports.slice(9))
console.log(summer_sports)

let fruits = sports.slice(2,3).concat(sports.slice(7,9))

console.log(fruits)


document.write(`<ul>
<li>***Winter sports***</li>
<li>${winter_sports.join('</li><li>').replaceAll(',',': ')}
</li>
<li></li>
<li>***Summer sports***</li>
<li>${summer_sports.join('</li><li>').replaceAll(',',': ')}
</li>
<li></li>
<li>***Fruit***</li>
<li>${fruits.join('</li><li>').replaceAll(',',': ')}
</li>
</ul>
`)
//for(i=0; i<winter_sports.length; i++){
	
//	winte_array = winter_sports[i].join(': ');
//	console.log(winte_array )
//}