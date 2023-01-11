import Input from "./InputComponent";
import ToDo from "./ToDoComponent";
import { useState } from "react";


const ToDoListApp =() =>{

    const [task, setTask] = useState([
        {name: "Dummy task 1", date : Date.now},
        {name: "Dummy task 2",  date : Date.now},
        {name: "Dummy task 3", date : Date.now},
        {name: "Dummy task 4",  date : Date.now}
    ]);

    const deleteTask = (deletedTask) => {
        const temp = task.filter((item) => {return item.name!==deletedTask});
        setTask([...temp]);
    };

    const addNewTask = (newTask) => {
       const temp = [...task,{name : newTask,  date : Date.now}];
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