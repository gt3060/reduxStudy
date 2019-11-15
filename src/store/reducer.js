import { LISTCHANGE, LISTADD, LISTDELETE, GETLIST } from './actionTypes'

//暴露方法

const defaultState = {
    inputValue : "Write Something",
    list:[
        // 'firstData',
        // 'SecondData',
        // 'ThirdData',
        // 'DataList'
    ]
}

export default (state = defaultState, action) => {
    // console.log(state,action);           
                                        //state: 指的是原始仓库里的状态;
                                        //action: 指的是action新传递的状态.
    //reducers里只能接受state，不能改变state，store进行修改
    if(action.type === LISTCHANGE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        // newState.list.push(action.value);
        // console.log(newState.list)
        return newState;
    }
    else if(action.type === LISTADD){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.value);
        return newState;
    }
    else if(action.type === "ListDecrease"){
        let newState  = JSON.parse(JSON.stringify(state));
        newState.list.pop(0);
        return newState;
    }
    else if(action.type === LISTDELETE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        return newState;
    }
    else if(action.type === GETLIST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        return newState;
    }
    return state;
}