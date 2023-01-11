import {FaTrash} from 'react-icons/fa'
const ToDo = (props) => {

   const onDeleteTask = (deletedTask) => {
     props.deleteTask(props.task.name);
   }

    return(
        <div className="todos">
        <p>{props.task.name}</p>
        <span className='trash-btn' onClick={onDeleteTask}><FaTrash /></span>
        </div>
    );
}

export default ToDo;