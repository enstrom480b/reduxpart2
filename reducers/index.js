
  const  initstate={
    age:21
}

const reducer=(state=initstate,action)=>{
    const newstate={...state}
    if(action.type==='AGE_UP'){
        newstate.age++
    }
    if(action.type==='AGE_DOWN'){
        newstate.age--
    }
    return newstate
}
export default reducer