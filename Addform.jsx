import React, { Component } from 'react'

export default class Addform extends Component {

    state={
        content:''
    }
    handlechange=(e)=>{
        this.setState({
            content:e.target.value
        })
        console.log(e.target.value)
    }

    handlesubmit=(e)=>{
        e.preventDefault()
   this.props.addtodo(this.state)
   this.setState({
       content:''
   })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
               
            <label>add new todo:</label>
            <input type="text" onChange={this.handlechange} value={this.state.content}/>
            <input type="submit" value ="submit"/>
              </form>
            </div>
        )
    }
}
