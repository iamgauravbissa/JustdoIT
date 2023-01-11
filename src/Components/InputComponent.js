import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Input = (props) => {

    const [input , setInput] = useState('');

    const addToDo = () => {
        props.addTask(input);
        setInput('');
    }

    return(
        <div className="flex">
            <input value={input} onChange={(e)=> setInput(e.target.value)} type='text' placeholder ='Add new todo'className="input"></input>
            <button className="add-btn" onClick={addToDo}><FaPlus /></button>
        </div>
    );
}

export default Input;