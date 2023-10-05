import Task from './Task';

const TaskList = ({ tasks, deleteTask }) => {
    return(
        <div>
            <h2>TaskList</h2>
            
            {/*{id:_, text:_}     */}
            {tasks.map( (task) =>  (
                <Task key={task.id} task={task} deleteTask={deleteTask}/>
            )
            
            )
            
            }
        </div>
    )
}
export default TaskList;