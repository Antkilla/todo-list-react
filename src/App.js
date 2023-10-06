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

    console.log(tasks);
  }


  const deleteTask = (id) =>  {
    //filter meth: checks every item in array//
    //given condition returns a new array for all items if true//
 
    let updatedTasks = tasks.filter( (task) => task.id !== id);
    setTasks(updatedTasks);
  }

  const editTask = (id, newText) => {
    let updatedTasks = tasks.map( (task) => (task.id === id) ? {...task, text: newText} : task );
    
    
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h1>My React TO-DO List</h1> 
      {/*passes down the task state variable above as a prop called 'task' to the child*/ }
      {/*<MyComponenet propName={originalName}*/}
      <AddTask addNewTask={addNewTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
    </div>
  );
}

export default App;
