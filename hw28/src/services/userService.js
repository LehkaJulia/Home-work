const API = `https://63a1e3fdba35b96522eb1361.mockapi.io/users`;

export const getUsers = () => fetch(API).then(data => data.json());

export const getUser = id => fetch(API+`/${id}`).then(data => data.json());

export const deletUser = id => fetch(API+`/${id}`, {
    method: `DELETE`
}).then(data => data.json());

export const updateUser = (id, obj) => fetch(API+`/${id}`, {
    method: `PUT`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());

export const addUser = (obj) => fetch(API, {
    method: `POST`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());