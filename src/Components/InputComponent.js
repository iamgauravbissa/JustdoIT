import { FaPlus } from "react-icons/fa";

const Input = () => {
    return(
        <div className="flex">
            <input type='text' placeholder ='Add new todo' className="input"></input>
            <button className="add-btn"><FaPlus /></button>
        </div>
    )
}

export default Input;