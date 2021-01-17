import React,{Component} from 'react';

class AddTodo extends Component{
    state={
        content:""
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
        
    }
    handleChange=(e)=>{
        
        this.setState({
            content:e.target.value
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="addtodo">Add some work</label>
                <input type="text" onChange={this.handleChange} value={this.state.content} required></input>
            </form>
        )
    }
}
export default AddTodo;