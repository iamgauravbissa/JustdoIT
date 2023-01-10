import {FaTrash} from 'react-icons/fa'
const ToDo = () => {
    return(
        <div className="todos">
        <p>Task 1 </p>
        <span className='trash-btn'><FaTrash /></span>
        </div>
    )
}

export default ToDo;