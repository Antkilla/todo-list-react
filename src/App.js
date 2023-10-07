import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { useEffect, useState } from 'react';

function App() {
  //const [data, setdata]= usestate(INITIAL VALUE);
  //the structure of the state is an array of objects each with
  //id and text propertie//

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);


  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to the TO-DO List Tracker!");


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


  useEffect(() => {
    //side effect logic here
    console.log("welcomeMessage is", welcomeMessage);

    const timer = setTimeout(() => {
      setWelcomeMessage("");
    }, 5000); // wait 5s before running the effect funct

    //optional cleanup logic 
    return () => {
      //good practice to clearout timer when no longer needed
       clearTimeout(timer);
       //cleanup actions, executed before the effect runs again or when the component unmounts
    };
    //only want this effect to run once: when the component loads(in this case the file app.js) 
    // so we leave dependency arr empty
  },  [welcomeMessage]);


/*useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (storedTasks) {
    setTasks(storedTasks);
  }
}, [])
*/

useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks])




  return (
    <div className="App">
      <h1>My React TO-DO List</h1> 
      {welcomeMessage && <p>{welcomeMessage}</p>}
      {/*passes down the task state variable above as a prop called 'task' to the child*/ }
      {/*<MyComponenet propName={originalName}*/}
      <AddTask addNewTask={addNewTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
    </div>
  );
}

export default App;
