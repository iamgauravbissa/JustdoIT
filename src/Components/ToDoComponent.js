import {FaTrash} from 'react-icons/fa'
const ToDo = (props) => {
    const deleteTask = () =>{
        props.deleteTodo(props.name);
    }
    return(
        <div className="todos">
        <p>{props.name} </p>
        <span className='trash-btn' onClick={deleteTask}><FaTrash /></span>
        </div>
    )
}

export default ToDo;