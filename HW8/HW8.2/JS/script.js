const sports = [
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

let winter_sports = sports.slice(0,2).concat(sports.slice(3,5))

let summer_sports = sports.slice(5,7).concat(sports.slice(9))

let fruits = sports.slice(2,3).concat(sports.slice(7,9))

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
