let chooseFastfood;
let costBun = 0;
const hamburgerCost = 10;
const cheeseburgerCost = 15;
const smallPotatoesCost = 10;
const middlePotatoesCost = 15;
const bigPotatoesCost = 20;
const ketchupCost = 2;
const mayonnaiseСost = 3;


do{
    chooseFastfood = prompt(`What do you want to order hamburger or cheeseburger?`);
    let doubleCheese;
  
    if(chooseFastfood){
        chooseFastfood=chooseFastfood.replaceAll(` `, ``).toLowerCase();
    }
             
    switch(chooseFastfood){
        case 'hamburger':
            costBun += hamburgerCost;
            break;
        case 'cheeseburger':
            costBun += cheeseburgerCost;
            doubleCheese=confirm(`Would you like to add double cheese?`);
            let costBunDoubleCheese = 5;

            if(doubleCheese){
            costBun += costBunDoubleCheese;
            }

        break;
    }       

} while (!chooseFastfood|| (chooseFastfood !== `hamburger` && chooseFastfood!== `cheeseburger`));


let addPotato = confirm(`Would you like potato?`);
let choosePotato;

if(addPotato){
    choosePotato = prompt(`Choose potato size: small / middle / big`);

    if(choosePotato){
        choosePotato=choosePotato.replaceAll(` `, ``).toLowerCase();
    }

    switch(choosePotato){
        case `big`:
            costBun += bigPotatoesCost;
            break;

        case `middle`:
            costBun += middlePotatoesCost;
            break;  

        default:
            choosePotato = `small`;

            costBun += smallPotatoesCost;
        break;
    }
}

let addSauce = confirm(`Would you like sauce?`);
let chooseSauce;

if(addSauce){
    chooseSauce= prompt(`Choose sauce: ketchup/mayonnaise`);

    if(chooseSauce){
      chooseSauce=chooseSauce.replaceAll(` `, ``).toLowerCase();
    }

    switch (chooseSauce){
        case `mayonnaise`:
            costBun += mayonnaiseСost;
        break;
        default:
            chooseSauce=`ketchup`;
            costBun += ketchupCost;
    }
}
  

document.write(`
    <h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${chooseFastfood} </li>
		${addPotato ? `<li>Potato 🍟: ${choosePotato} </li>` : ``}
		${addSauce ? `<li>Sauce 🧂: ${chooseSauce} </li>` : ``}
	</ul>

	<p>Price: $${costBun} </p>
`);