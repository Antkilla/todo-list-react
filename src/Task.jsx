import { useState } from "react"

const Task = ({ task, deleteTask, editTask}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);
    

    const handleEditClick = () => {
        if (isEditing) {
            editTask(task.id, newText);
        }

        setIsEditing(!isEditing);

    }

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {isEditing
                ? <input type="text" placeholder="Enter a new task" value={newText} onChange={(e) => setNewText(e.target.value)}/>                
                :task.text
            }    
            <div>     
                <button onClick={() => handleEditClick()}>{isEditing ? "Confirm" : "Edit"} </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </li>
    )
}

export default Task;