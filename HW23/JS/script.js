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

const API = `https://61c9d37520ac1c0017ed8eac.mockapi.io`
const body = document.querySelector(`body`)
const createHero = document.querySelector(`form`)
const createName = document.querySelector(`#createName`)
const createComics = document.querySelector(`#createComics`)
const createFavourite = document.querySelector(`#createFavourite`)
const table = document.createElement(`table`)

const renderTask = hero => {
    let tr = document.createElement(`tr`);
    tr.id = hero.id;
    tr.innerHTML = `<td>${hero.name}</td>
        <td>${hero.comics}</td>
        <td>
            <input type="checkbox" ${hero.favourite===true ? `checked` : ``} id="${hero.id}"></input>
        </td>`;

    let tdBtns = document.createElement(`td`);

    let btn = document.createElement(`button`);
    btn.id = hero.id;
    btn.innerHTML = `Delete`;


    btn.addEventListener(`click`,async () => {
        await controller(API + `/heroes/${element.id}`, `DELETE`);
        tr.remove();
    })

    tdBtns.append(btn);

    tr.append(tdBtns);

    table.append(tr);
}

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
            alert(`Такий герой вже існує`)
            return;
        } else{
            let addedHero = await controller(API+`/heroes`, `POST`, newHero);
            console.log(`Hero ${newHero.name} successfully added`, addedHero);

            renderTR(addedHero);
        }

    } catch(err){
        console.log(`In catch:`, err);
    }
    
})

const renderTR = async hero => {
    let tr = document.createElement(`tr`);
    tr.innerHTML = `<td>${hero.name}</td>
    <td>${hero.comics}</td>`;

    let tdFav = document.createElement(`td`);
    let inputFav = document.createElement(`input`);
    inputFav.type = `checkbox`;
    inputFav.checked = hero.favourite;
    inputFav.addEventListener(`change`, async () => {
        let changeFav = await controller(API+`/heroes/${hero.id}`, `PUT`, {favourite: inputFav.checked});
        console.log(`Hero ${hero.name} successfully changed`, changeFav);
    });

    tdFav.append(inputFav);

    let tdDel = document.createElement(`td`);
    let btnDel = document.createElement(`button`);
    btnDel.innerHTML = `Delete`;
    btnDel.addEventListener(`click`, async () => {
        let delHero = await controller(API+`/heroes/${hero.id}`, `DELETE`);
        console.log(`Hero ${hero.name} successfully deleted`, delHero);
        tr.remove();
    });

    tdDel.append(btnDel);
    
    tr.append(tdFav, tdDel);

    let tbody = document.querySelector(`table#heroes tbody`);
    tbody.append(tr);
} 

const renderTable = () => {
    let table = document.createElement(`table`);
    table.id = `heroes`;
    table.innerHTML = `<thead>
        <tr>
            <th>Name</th>
            <th>Comics</th>
            <th>Favourite</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody></tbody>`;

    body.append(table);
}

const renderStorageHeroes = async () => {
    let heroes = await controller(API+`/heroes`);
    heroes.forEach(hero => renderTR(hero));
}

const renderComics = async () => {
    let universes = await controller(API+`/universes`);
    
    createComics.innerHTML = universes
        .map(item => `<option value="${item.name}">${item.name}</option>`)
        .join(``);
}

renderComics();
renderTable();
renderStorageHeroes();