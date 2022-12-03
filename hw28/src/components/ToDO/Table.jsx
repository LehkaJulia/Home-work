import React from "react";

function Table ({heroes, removeItem}) {

  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Comics</th>
                <th>Favourite</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {heroes.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.comics}</td>
                    <td><input type="checkbox" defaultChecked={item.favourite} ></input></td>
                    <td><button onClick={(e) => removeItem(e, item.id)}>Delete</button></td>
                </tr>
              ))}
            
            
        </tbody>
    </table>
    
  );
}

export default Table;
