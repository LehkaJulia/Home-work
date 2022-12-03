import {Fragment, useEffect,  useState} from 'react'
import {getComics, getHeroes, deleteItem, addItem} from "./../../services/todoService";
import Form from './Form';
import Table from './Table';


function ToDo () {
    const [comics, setComics] = useState([]);
    const [heroes, setHeroes] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
      console.log(`in useEffect`);
  
      getComics()
            .then((data) => setComics(data));
    }, []);

    useEffect(() => {
      console.log(`in useEffect`);
  
      getHeroes()
            .then((data) => setHeroes(data));
    }, []);

    const removeItem = async (e, id) => {
        e.stopPropagation();
        e.target.disabled = true;
    
        await deleteItem(id);
        e.target.disabled = false;
        setHeroes((prevState) => prevState.filter((item) => item.id !== id));
      };

     const submitForm = async (e) => {
        e.preventDefault();
    
        let addedItem = await addItem(e.target);
        console.log(addedItem)
        console.dir(e.target)
        setHeroes((prevState) => [...prevState, addedItem]);
    
        e.target.reset();
      };
    
      
  return (
    <Fragment>
        <Form  comics={comics}  submitForm={submitForm} />
        <Table heroes={heroes} removeItem={removeItem}/>
    </Fragment>
    
  );
}

export default ToDo;