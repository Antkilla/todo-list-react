import { useState } from "react"

//with destructuring
const AddTask = ({ addNewTask }) => {   //passes the addNewTask funct as a prop
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addNewTask({ text });
        setText('');
    }

    return(
        <div>
            <h2>Add Task</h2> 
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Enter a new task" value={text} onChange={(e) => setText(e.target.value)}/>                
                <button type="submit"> Save Task </button>
            </form>
           
            {/*JSON.stringify(tasks)*/}       {/*json makes a string of the object props.task*/}
            {/*example*/}
        </div>
    )
}

export default AddTask;