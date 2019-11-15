import React, { Component } from 'react';
import '../css/App.css';
import 'antd/dist/antd.css';
import { Input, Button, List }from 'antd';
import store from '../store/index';
// import { LISTCHANGE, LISTADD, LISTDELETE } from '../store/actionTypes'
import { changeListAction, listAddAction, listDeleteAction, getList } from '../store/actionCreators'
import axios from 'axios'
// import Decrease from './Decrease';

class TodoList extends Component {
    constructor(props) {
        super(props);
        // this.state = {  };
        this.state = store.getState();
        store.subscribe(this.storeChange)
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(res=>{
            console.log(res.data.data);
            const data = res.data.data.list;
            const action = getList(data);
            store.dispatch(action)
        })
    }
    storeChange = () =>{
        this.setState(store.getState());
    }
    
    inputChange = (e) =>{
        // const action = {
        //     type:LISTCHANGE,
        //     value:e.target.value
        // }
        const action = changeListAction(e.target.value);
        store.dispatch(action);
    }
    addList = () =>{
        const number =  this.state.inputValue;
        // const action = {
        //     type:LISTADD,
        //     value:number
        // }
        const action = listAddAction(number);
        store.dispatch(action);
    }
    decrease = (index) =>{
        // const action = {
        //     type:LISTDELETE,
        //     value:index
        // }
        const action = listDeleteAction(index)
        store.dispatch(action);
    }

    render() {
        return (
            <div>
                <div className="App">
                    <Input style={{width:"20%"}} placeholder={this.state.inputValue} onChange={this.inputChange}/>&nbsp;&nbsp;
                    <Button type="primary" onClick={this.addList}>增加</Button>
                </div>
                {/* 点击按钮实现删除list */}
                {/* <Decrease/> */}
                <div className="App" style={{width:"100%"}} >
                    <List 
                        bordered="true" 
                        dataSource = {this.state.list} 
                        renderItem={(item,index)=>(<List.Item onClick={this.decrease.bind(this,index)} >{item}</List.Item>)} 
                        style={{width:"20%"}}/>
                </div>
                
            </div>
        );
    }
}

export default TodoList;