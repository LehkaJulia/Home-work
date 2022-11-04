import React, { Component } from 'react';
import List from '../List/List';

class ToDo extends Component {
    
    state = {
        firstList: this.props.list,
        secondList: [],
        thirdList: [],
    };

    transferToSecond() {
        this.setState({
            secondList: [this.state.firstList.shift(), ...this.state.secondList],
        });
    }
    
    transferToThird() {
        this.setState({
            thirdList: [this.state.secondList.shift(), ...this.state.thirdList],
        });
    }

    transferToFirst() {
        this.setState({
            firstList: [this.state.secondList.shift(), ...this.state.firstList],
        });
    }

    removeLastItem() {
        this.setState({
            thirdList: this.state.thirdList.slice(0, -1),
        });
    }

    render() {
        return (
            <section className='wrapper'>
                <div className="part">
                    <List
                        list={this.state.firstList}
                    
                        actions={[
                            {text: "Transfer first to right", action: this.transferToSecond.bind(this)}
                        ]}
                    />
                </div>
                <div className="part">
                    <List
                        list={this.state.secondList}
                        
                        actions={[
                            {text: "Transfer first to left", action: this.transferToFirst.bind(this)},
                            {text: "Transfer first to right", action: this.transferToThird.bind(this)}
                        ]}
                    />
                </div>
                <div className="part">
                    <List
                        list={this.state.thirdList}
                        actions={[
                            {text: "Remove last item", action: this.removeLastItem.bind(this)}
                        ]}
                    />
                </div>
            </section>
            
        );
    }
}

export default ToDo;