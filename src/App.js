import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { useState } from 'react';

function App() {
  //const [data, setdata]= usestate(INITIAL VALUE);
  //the structure of the state is an array of objects each with
  //id and text propertie//

  const [tasks, setTasks] = useState([
    { id : 1, text: "Learn React"}
  ])

  const addNewTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }   

    setTasks([...tasks, newTask]);





  
  }

  return (
    <div className="App">
      <h1>My React TO-DO List</h1> 
      {/*passes down the task state variable above as a prop called 'task' to the child*/ }
      {/*<MyComponenet propName={originalName}*/}
      <AddTask addNewTask={addNewTask}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
