import {React,Component} from 'react';
import {connect}from 'react-redux';
class Apps extends Component{

 
    render()
    {
        console.log(this.props)
        return(
            <div>
<div>Age:<span>{this.props.age}</span></div>
<button onClick={this.props.onageup}>AGE UP</button>
<button onClick={this.props.onagedown}>AGE DOWN</button>
            </div>
        )
    }
}

const mapstatetoprops=(state)=>{
    return{
        age:state.age
    }
}


const mapdispatchtoprops=(dispatch)=>{
    return{
        onageup:()=>dispatch({type:'AGE_UP'}),
        onagedown:()=>dispatch({type:'AGE_DOWN'})
    }
}

export default  connect(mapstatetoprops,mapdispatchtoprops)(Apps)
