import React, { Component } from 'react';
import '../css/App.css';
import { Button } from 'antd';
import  store from '../store/index'

class Decrease extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.storeChange);
    }
    storeChange = () => {
        this.setState(store.getState())
    }
    ListDecrease = () => {
        const action = {
            type:'ListDecrease'
        };
        store.dispatch(action)
    }
    render() {
        return (
            <div className="App">
                <Button type="primary" onClick={this.ListDecrease}>减少</Button>
            </div>
        );
    }
}

export default Decrease;