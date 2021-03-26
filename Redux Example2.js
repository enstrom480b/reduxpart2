import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import {Provider}from 'react-redux';
import Math from './Math'

const action={
type:'changestate',
payload:{
  newstate:'newstate'
}
}
const initstate={
  arr:[],
  post:[]
}
function reducer(state=initstate,action){
  if(action.type==='changestate')
  {
    return { ...state,arr:[...state.arr,action.payload.newstate]}
  }
  
}
const store=createStore(reducer)
store.subscribe(()=>{
  console.log('store created',store.getState())
})
store.dispatch({
  type:'changestate',
  payload:{
    newstate:'oldtate'
  }
  })

  store.dispatch({
    type:'changestate',
    payload:{
      newstate:'newstate'
    }
    })
  




ReactDOM.render(
  <Provider store={store}>

  </Provider>,
  document.getElementById('root')
);
