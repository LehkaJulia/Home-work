const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}
let keysIngridient

class Coffee{
    constructor(coffe){
        Object.assign(this, coffe)

    }
    makeCoffee(){
        return `<div class="cup">
                <div class="${this.getNameClass()}">
                    <div class="coffee__ingredients">
                    ${this.getKeysIngridient(this.ingredients)}                
                    </div>
                </div>
                <p class="coffee__title">${this.title}</p>
            </div>
            `
       ;
       
       
    }
   
    getNameClass(){
        return `coffee`
    }
    
    getKeysIngridient(coffe){
  
        keysIngridient = Object.keys(coffe)
            .map(cofe => `<p style="height: ${coffe[cofe]}%" class="ingredient ${cofe.replaceAll(' ', '__')}">${cofe}</p>`)
            .join('')
        return keysIngridient
    }
   
}
class Espresso extends Coffee{
    constructor(coffe){
        super(coffe)
    }
    getNameClass(){
        return `coffee coffee--espresso`
    }
}
class EspressoMilk extends Coffee{
    constructor(coffe){
        super(coffe)
    }
    getNameClass(){
        return `coffee coffee--espressoMilk`
    }
}
class Alcoholic extends Coffee{
    constructor(coffe){
        super(coffe)
    }
    getNameClass(){
        return `coffee coffee--alcoholic`
    }
}

class Dessert extends Coffee{
    constructor(coffe){
        super(coffe)
    }
    getNameClass(){
        return `coffee coffee--dessert`
    }
}

const COFFEE = {
    Espresso: coffe => new Espresso (coffe),
    EspressoMilk: coffe => new EspressoMilk (coffe),
    Alcoholic: coffe => new Alcoholic (coffe),
    Dessert: coffe => new Dessert (coffe)
}
let renderDefaultCoffee = new Coffee(
    {
        title: `Default Coffee`,
        ingredients: {
            espresso: 50,
            whiskey: 10,
            "whipped cream": 40
        }
    })
let coffeClass=[]
for(let key in COFFEE_TYPES){
    coffeClass
    .push(COFFEE_TYPES[key]
        .map(coffe => {
            return coffe ? COFFEE[key](coffe) : new Coffee (coffe)})
        .map(coffe => coffe.makeCoffee())
        .join('')
        )
}
document.write( `<section class="cups">${renderDefaultCoffee.makeCoffee()}${coffeClass.join('')}</section>`)
