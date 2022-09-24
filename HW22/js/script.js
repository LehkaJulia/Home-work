const API = `https://api.chucknorris.io/jokes`;

const jokesCategories = document.querySelector(`#jokesCategories`);
const jokesList = document.querySelector(`#jokesList`);

const getData = url => fetch(url) 
    .then(data => data.ok ? data.json() : Promise.catch(data.statusText))
    .catch(err => console.log(`In catch: ${err}`));

const renderSelectCats = () => {
    getData(API+`/categories`)
        .then(cats => {
            jokesCategories.innerHTML = cats
                .map((cat) => `<option value="${cat}">${cat}</option>`)
                .join(``);
        });
}
renderSelectCats ()

jokesCategories.addEventListener(`change`, () =>{

    getData(API+`/random?category=${jokesCategories.value}`)
        .then(joke => {
            let  disableCat = document.querySelector(`option[value=${jokesCategories.value}]`) 
            disableCat.disabled=true;
            
            renderJoke(joke,disableCat);
        })

});

const renderJoke = (joke,disableCat) => {
    const jokeLi = document.createElement(`li`);
    jokeLi.innerHTML = `<p>Category: <b>${joke.categories[0]}</b></p>
    <p>${joke.value}</p>`;

    const removeBtn = document.createElement(`button`);
    removeBtn.innerHTML = `Remove joke`;
    removeBtn.addEventListener(`click`, () => {
        jokeLi.remove();

        disableCat.disabled=false;
    });

    jokeLi.append(removeBtn);

    jokesList.prepend(jokeLi); 
};


