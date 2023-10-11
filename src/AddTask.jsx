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
        <div className="mb-3">
            <h2>Add Task</h2> 

            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter a new task" value={text} onChange={(e) => setText(e.target.value)}/>                        
                <button type="submit" className="btn btn-primary input-group-append">Save Task</button>                
                </div>
            </form>
            {/*JSON.stringify(tasks)*/}       {/*json makes a string of the object props.task*/}
            {/*example*/}
        </div>
    )
}

export default AddTask;