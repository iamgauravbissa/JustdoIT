import Input from "./InputComponent";
import ToDo from "./ToDoComponent";
import { useState } from "react";


const ToDoListApp =() =>{

    const updateToDos = (inputText)=>{
            console.log(task);
            setTask([...task,inputText]);
    };

    const deleteTodo = (name) => {
        const temp = task.filter(item => item != name);
        setTask([...temp]);

    }

    const [task, setTask] = useState([]);
    return(
        <>
        <Input onClick={updateToDos}></Input>
        {task.map((tasks) =>{ return <ToDo name = {task} deleteTodo={deleteTodo}></ToDo>} )}
        </>
    )
}

export default ToDoListApp;