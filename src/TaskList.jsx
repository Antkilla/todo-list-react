import Task from './Task';

const TaskList = ({ tasks }) => {
    return(
        <div>
            <h2>TaskList</h2>
            <p>{JSON.stringify(tasks)}</p>
            <Task />
            <Task />
            <Task/>
        </div>
    )
}
export default TaskList;