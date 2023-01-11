import Input from "./InputComponent";
import ToDo from "./ToDoComponent";
import { useState } from "react";


const ToDoListApp =() =>{

    const [task, setTask] = useState([
        {name: "Gaurav", id : 1},
        {name: "Harish", id : 1},
        {name: "Gupta", id : 1},
        {name: "Pawan", id : 1}
    ]);

    const deleteTask = (deletedTask) => {
        const temp = task.filter((item) => {return item.name!==deletedTask});
        setTask([...temp]);
    };

    const addNewTask = (newTask) => {
       const temp = [...task,{name : newTask, id:1}];
       setTask([...temp]);
    }

    return(
        <>
        <Input addTask = {addNewTask}></Input>
        {task.map((tasks) =>{ return <ToDo task = {tasks} deleteTask={deleteTask}></ToDo>} )}
        </>
    )
}

export default ToDoListApp;