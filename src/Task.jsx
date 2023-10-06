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
        <div>
            <h3>
                {isEditing
                    ? <input type="text" placeholder="Enter a new task" value={newText} onChange={(e) => setNewText(e.target.value)}/>                
                    :task.text
                }         
                <button onClick={() => handleEditClick()}>{isEditing ? "Confirm" : "Edit"} </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </h3>
        </div>
    )
}

export default Task;