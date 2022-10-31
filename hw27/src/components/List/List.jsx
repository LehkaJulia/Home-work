import React, { Component } from 'react';
import Item from '../Item/Item';

const list = [
    {
      id: 1,
      title: `Task 1`
    },
    {
      id: 2,
      title: `Task 2`
    },
    {
      id: 3,
      title: `Task 3`
    },
    {
      id: 4,
      title: `Task 4`
    }
  ]

class List extends Component {

    render() {
        return (
            <ul>
                <Item list={list}/>            
            </ul>
        );
    }
}

export default List;

