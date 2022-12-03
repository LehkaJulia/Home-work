const API = `https://61c9d37520ac1c0017ed8eac.mockapi.io`;
const APIMY = `https://63381760132b46ee0bea3fde.mockapi.io`

export const getComics = () => fetch(API+'/universes').then((data) => data.json());

export const getHeroes = () => fetch(APIMY+'/heroes').then((data) => data.json());

export const deleteItem = (id) =>
  fetch(APIMY + `/heroes/${id}`, { method: `DELETE` }).then((data) => data.json());

export const addItem = (obj) =>
  fetch(APIMY+'/heroes', {
    method: `POST`,
    headers: {
      "Content-type": "application/json",
    },
    // body: JSON.stringify(obj),
  }).then((data) => data.json());