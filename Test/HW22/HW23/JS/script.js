// const API = `https://61c9d37520ac1c0017ed8eac.mockapi.io`
const controller = async (url, method=`GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    }

    if(obj) options.body = JSON.stringify(obj);
    
    let request = await fetch(url, options),
        response = request.ok ? request.json() : Promise.catch(request.statusText);

    return response;
}

const API = `https://63381760132b46ee0bea3fde.mockapi.io/`
const body = document.querySelector(`body`)
const createHero = document.querySelector(`form`)
const createName = document.querySelector(`#createName`)
const createComics = document.querySelector(`#createComics`)
const createFavourite = document.querySelector(`#createFavourite`)
const table = document.createElement(`table`)

const renderNewTR = async () => {
    let heroes = await controller(API+`/heroes`);
    
    table.innerHTML = heroes
        .map(arrHeroes => `<tr>
            <td>${arrHeroes.name}</td>
            <td>${arrHeroes.comics}</td>
            <td>
                <input type="checkbox" ${arrHeroes.favourite===true ? `checked` : ``} id="${arrHeroes.id}"></input>
            </td>
            <td><button id="${arrHeroes.id}">Delete</button></td>
        </tr>`)
        .join(``);
    } 
controller(API + `/heroes`)
    .then(arrHeroes => {
        // console.log(arrHeroes);
        
        table.innerHTML = `<tr>
            <th>Name</th>
            <th>Comics</th>
            <th>Favourite</th>
            <th>Actions</th>
        </tr>`
        arrHeroes.map(hero => {
            hero = `<tr>
                <td>${hero.name}</td>
                <td>${hero.comics}</td>
                <td>
                    <input type="checkbox" ${hero.favourite===true ? `checked` : ``} id="${hero.id}"></input>
                </td>
                <td><button id="${hero.id}">Delete</button></td>
            </tr>`
            table.innerHTML+=hero

            

        })
        
        body.append(table);

        
          
        const input = document.querySelectorAll('table input')
            .forEach(element  => {
                element.addEventListener(`change`, async () => {
                    let inputChekc = {
                        favourite: element.checked
                    }
                   await controller(API + `/heroes/${element.id}`, `PUT`, inputChekc)
                    
                    })
            
                
            }); 

        const btn = document.querySelectorAll(`table button`)
        .forEach(element => {
            element.addEventListener(`click`,async () => {
                await controller(API + `/heroes/${element.id}`, `DELETE`);
                
                console.dir(element)
                // renderNewTR();
                })
            
        }); 

        createHero.addEventListener(`submit`, async e=>{
            e.preventDefault();
            try{
                let newHero = {
                    name: createName.value,
                    comics: createComics.value,
                    favourite: createFavourite.checked
                }
                
                let storageHeroes = await controller(API+`/heroes`);
                let existingHeroes = storageHeroes.find(task => task.name.toLowerCase() === createName.value.toLowerCase());
                
                if(existingHeroes){
                    alert(`Такий герой вжt існує`)
                    return;
                } else{
                    controller(API+`/heroes`, `POST`, newHero);
                }
    
            } catch(err){
                console.log(`In catch:`, err);
            }
            
        })
    })


 

