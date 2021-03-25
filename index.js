import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Supersquad from './components/Supersquad';
import {createStore} from 'redux';
import {Provider}from 'react-redux';
import Math from './Math'
//import rootreducer from './reducers';



const initstate={
  todos:[],
  posts:[]
}

//import {addCharacterById}from './actions'
const todoaction={
  type:'ADD_TODO',
  todo:'buy milk'

}
function myreducer(state=initstate,action){

 if(action.type==='ADD_TODO'){
   return{...state,
     todos:[...state.todos,action.todo]
   }
 } 
console.log(state,action)
} 

//import Characterlist from './Characterlist'
const store=createStore(myreducer)

store.subscribe(()=>{
  console.log('store updated',store.getState())
})

store.dispatch({type:'ADD_TODO',todo:'buy eggs'})
store.dispatch({type:'ADD_TODO',todo:'buy chicken'})
store.dispatch({type:'ADD_TODO',todo:'buy chips'})

//console.log(store.getState())
//store.subscribe(()=>console.log('store',store.getState()));
//store.dispatch(addCharacterById(2))

ReactDOM.render(
  <Provider store={store}>
< Math/>
  </Provider>,
  document.getElementById('root')
);