import React from 'react'

function Form ({comics, submitForm, changeTitle}) {

  return (
    <form onSubmit={submitForm}>
        <input id="createName" type="text" ></input>
        <select id="createComics">
            {comics.map((item) => (
                <option value={item.name} key={item.id}>{item.name}</option>
              ))}
        </select>
        <input id="createFavourite" type="checkbox" defaultChecked ></input>
        <button>Submit</button>
    </form>
  );
}

export default Form;