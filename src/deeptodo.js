import React from 'react';
const Todos= ({todos,deleteTodo}) =>{
    console.log(deleteTodo);
   const todoList=todos.length?(
        todos.map(todo=>
            {
                return(
                    <div className="todos" key={todo.id}>
                        <div className="todo-wrap">
                            <p className="todo">{todo.content}</p>
                            <button onClick={()=>{deleteTodo(todo.id)}}>remove</button>
                        </div>
                    </div>
                )
            })
   ):(
    <p className="no-to-do">
        you have nothing to do
    </p>
   );
    return(
            <div className="todo">
                {todoList}
            </div>

    )
}
export default Todos;