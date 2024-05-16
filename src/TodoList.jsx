import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){

    let [todos,setTodos]= useState([{task:"simple Tasks",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]= useState("");

    let addNewTask= () =>{
        console.log("button was click");
        setTodos( (prevTodo)=>{
            return [...prevTodo, {task:newTodo,id:uuidv4(),isDone:false}]
        })
        setNewTodo("");
    }

    let updateTodoValue = (event)=> {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id)=>{
        console.log(id);
       setTodos( (prevTodos)=>todos.filter((prevTodos)=> prevTodos.id !=id));
        
    }

    let markAsDoneAll= () =>{
        setTodos( (prevTodo)=>
            prevTodo.map( (todo)=>{
                return{
                    ...todo,
                    isDone:true,
                }
            })
        )
    }
    let markAsDone= (id)=>{
        setTodos( (prevTodo)=>
            prevTodo.map( (todo)=>{
                if(todo.id==id){
                    return{
                        ...todo,
                        isDone:true,
                    }

                }else{
                    return todo;
                }
              
            })
        )

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
                            <span style={todo.isDone ? {textDecoration:"line-through"}:{}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                            <button onClick={()=>markAsDone(todo.id)}>markAsDone</button>
                        </li>
                    

                    ))} 
             </ul>
             <button onClick={markAsDoneAll}>markAsDoneAll</button>
        </div>
    )
}