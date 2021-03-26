import React, { Component } from 'react'
import Addform from './Addform'
import Todos from './Todos'
export default class App extends Component {
state={
    todos:[
        {
            id:1,content:'milk'
        },
        {
            id:2,content:'games'
        }
       
    ]
}
deletetodo=(id)=>{
   
    const todos=this.state.todos.filter(todo=>{
        return todo.id!==id
    })
this.setState({
    todos:todos
})
    console.log(todos)
}

addtodo=(todo)=>{
    todo.id=Math.random()
    let todos=[...this.state.todos,todo]
    this.setState({
        todos:todos
    })
}

    render() {
        return (
            <div>
                <h1 style={{color:'blue',fontSize:'44px'}}>Todo app</h1>
            <Todos todos={this.state.todos} delete={this.deletetodo}/>
            <Addform addtodo={this.addtodo}/>
            </div>
        )
    }
}
