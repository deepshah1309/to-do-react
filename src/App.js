import React ,{ Component } from 'react';
import Todos from './deeptodo';
import AddTodo from './Addtodo';
class App extends Component{
  state={
    todos:[
      {id:1,content:"let's have fun"}
    ]
  }
  deleteTodo=(id)=>{
    const todos=this.state.todos.filter(todo=>{ 
      return todo.id!== id;
      
    });
    this.setState({todos:todos})

  }
  addTodo=(todo)=>{
    todo.id=Math.random();
   
    const todos=[...this.state.todos,todo];
    this.setState({todos:todos})
    console.log(todo);
    
  }
  render(){
    console.log(this.state.todos);
  return(
    <div className="app">
      <h1>Deep Shah's todo </h1>
      
      <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
      <AddTodo addTodo={this.addTodo}/>
    </div>
  )
  }
}
export default App;
