import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    //converting input to arrays of object to display it in in form of list
    let[todos,settodos] = useState([{task : "sample task",id:uuidv4(),isDone : false}]); //array of object

    //input from input box
    let[newtodo,setnewtodo] = useState("");

    let entry = (events) =>{
        setnewtodo(events.target.value);
    }
    // let addnewTask = ()=>{
    //     if(newtodo.length != 0){
    //     settodos([...todos,newtodo]);
    //     setnewtodo("");
    //     }
    // }

    // adding todo
    let addnewTask = ()=>{
        if(newtodo.length != 0){
        settodos((prevTodos) =>{
            return [...prevTodos,{task:newtodo,id:uuidv4(),isDone:false}]
        });
        setnewtodo("");
        }
    }
// delete todo
    let deletetodo = (id) =>{
        settodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let upperCaseAll = () => {
        settodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,task: todo.task.toUpperCase()
                }
            })
        )
    }

    let toLowerCase = (id) => {
        settodos((todos) => 
                todos.map((todo) => {
                    if(todo.id === id){
                        return{
                            ...todo,task: todo.task.toLowerCase()
                        }; 
                    }else{
                        return{
                            ...todo
                        };
                    }
                }
                ) )
    }

    let isDOneCheck = (id) => {
        settodos((todos) =>
            todos.map((todo) =>{
                if(todo.id === id && !todo.isDone){
                    return{
                        ...todo,isDone: true
                    }
                }else if(todo.id === id && todo.isDone){
                    return{
                        ...todo,isDone:false
                    }
                }
                else{
                    return{
                        ...todo
                    }
                }
            })
        )
    }

    return(
        <div>
            <input onChange={entry} type="text" placeholder="write your taks" value={newtodo}/>
            <hr />
            <button onClick={addnewTask}>Add Task</button>
            <br /><br /><br />

            <hr />
            <h4>Tasks To do</h4>
            <ul>
                {
                    todos.map((todo)=>(
                            <li key={todo.id}>
                                <span style={todo.isDone && {textDecoration:"line-through"}}>{todo.task}
                                    &nbsp;&nbsp;&nbsp;
                                <button onClick={() => deletetodo(todo.id)}>delete</button>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={() => isDOneCheck(todo.id)}>Task Done</button>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={() => toLowerCase(todo.id)}>tolowerCase</button>
                                </span>
                                </li>
                    )
                    )
                }
            </ul>
            <button onClick={upperCaseAll}>UpperCase</button>
        </div>
    )
}