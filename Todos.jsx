import React, { Component } from 'react'

export default class Todos extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
             
                {this.props.todos.map((data)=>
                
                <h4><span style={{color:'red',cursor:'pointer',padding:'blue' ,width:'30px',height:'30px'}}  onClick={()=>{this.props.delete(data.id)}}>delete</span>{data.content}</h4>
               
            )}
            </div>
        )
    }
}
