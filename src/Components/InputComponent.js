import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Input = (props) => {
    const [inputText , setInputText] = useState();
    const onAddClick = () =>{
        props.onClick(inputText);
        setInputText();
    }
    return(
        <div className="flex">
            <input type='text' placeholder ='Add new todo' value={inputText} className="input" onChange={(e) => setInputText(e.target.value)}></input>
            <button className="add-btn" onClick={onAddClick}><FaPlus /></button>
        </div>
    )
}

export default Input;