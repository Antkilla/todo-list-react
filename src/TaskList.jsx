import Task from './Task';

const TaskList = ({ tasks, deleteTask, editTask }) => {
    return(
        <div>
            <h2>TaskList</h2>
            
            {/*{id:_, text:_}     */}
            <ul className="List-group">
                {tasks.map( (task) =>  (
                    <Task 
                        key={task.id} 
                        task={task} 
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                ))}
            </ul>
        </div>
    )
}
export default TaskList;