const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

const capitolize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();

class Vegetable{
    constructor(vegetable){
        this.type = `Vegetable`;
        this.seasonKoef = 1.3;

        Object.assign(this, vegetable);
    }
  
    getPrice(){
        return this.season ? this.price*this.seasonKoef : this.price;
        
    }
  
    getInfo(){
        let keys = Object.keys(this)
            .map(key => {
                if(key === `price`)
                    this[key] = this.getPrice(this[key])
                return key;
            })
            .map(key => `${capitolize(key)}: ${this[key]}`)
            .join(`. `)
        return keys;
    }
   
}

let List = vegetables
    .map(vegetable => new Vegetable (vegetable))
    .map(vegetable => `<li>${vegetable.getInfo()} </li>`)
    .join(` `)

document.write(`<ul>${List} </ul>`)


// console.log(vegetableType)
   
// vegetableType
//     .forEach(vegetable => console.log(vegetable.getInfo()));
// vegetableType
//     .forEach(vegetable => console.log(vegetable.getPrice()));


// let List = vegetableType
//     .map(vegetable => `<li>${vegetable.getInfo()} </li>`)
//     .join(` `)