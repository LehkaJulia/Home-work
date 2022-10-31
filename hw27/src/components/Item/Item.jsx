import React, { Component,Fragment } from 'react';

class Item extends Component {
    constructor(props){
        super(props);


        this.state.list.map((item,index) => {
            console.log(item.title,index)
        })
    };

    state = {
        list: this.props.list,
    };
    render() {
        return (
            <Fragment>
                {this.state.list.map((item,index) => {
                <li key={index}>{item.title}</li>
            })}
            </Fragment>  
        );
    }
}

export default Item;