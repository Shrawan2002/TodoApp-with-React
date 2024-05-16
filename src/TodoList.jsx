import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){

    let [todos,setTodos]= useState([{task:"simple Tasks",id:uuidv4()}]);
    let [newTodo,setNewTodo]= useState("");

    let addNewTask= () =>{
        console.log("button was click");
        setTodos( (prevTodo)=>{
            return [...prevTodo, {task:newTodo,id:uuidv4()}]
        })
        setNewTodo("");
    }

    let updateTodoValue = (event)=> {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id)=>{
        console.log(id);
       setTodos(todos.filter((todo)=> todo.id !=id));
        
    }
    


    return (
        <div>
            <input  name="" id="" value={newTodo} placeholder="add a task" onChange={updateTodoValue} />
            <button onClick={addNewTask}>add task</button>
            <br></br>,<br></br>
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map( (todo)=>(
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                        </li>
                    

                    ))}
            </ul>
        </div>
    )
}