import { useState } from "react";


export default function TodoList(){

    let [todos,setTodos]= useState(["simple tasks"]);
    let [newTodo,setNewTodo]= useState("");
    

    let updateTodoValue = (event)=>{
        console.log(event.target.value);
    }
    


    return (
        <div>
            <input type="text" name="" id="" placeholder="add a task" onChange={updateTodoValue} />
            <button>add task</button>
            <br></br>,<br></br>
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map( (todo)=>(
                        <li>{todo}</li>

                    ))
                }

            </ul>
        </div>
    )
}