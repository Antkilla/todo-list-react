const Task = ({ task, deleteTask }) => {
    return(
        <div>
            <h3>
                {task.text} <button onClick={deleteTask}>Delete</button>
        
            </h3>
        </div>
    )
}

export default Task;