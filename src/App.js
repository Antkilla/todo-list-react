//import './App.css';//
import 'bootstrap/dist/css/bootstrap.min.css';
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
    //container provides a fixed-width container 
    //max width that changes at different "breakpoints" depends on the ration screen size
    //mt,mb,ml,mx,my,\...pt,pb,pr,pl,px,py  (margin, padding)
    <div className="container mt-5">
      <h1 className="text-center mb-4">My React TO-DO List</h1> 
      {welcomeMessage && <p className="text-center">{welcomeMessage}</p>}
      {/*passes down the task state variable above as a prop called 'task' to the child*/ }
      {/*<MyComponenet propName={originalName}*/}

      {/*CSS/styling is not applied to React components directly only to the HTML inside the jsx*/}
      <AddTask addNewTask={addNewTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
    </div>
  );
}

export default App;






















/*
Personal Task Management:

    Individuals can use it to keep track of personal tasks, errands, and deadlines.
    Helps in prioritizing tasks and managing time effectively.

Work Projects:

    Teams can use a shared To-Do List to collaborate on project tasks.
    Each team member can add, edit, and mark tasks as complete, providing accountability.

Event Planning:

    When organizing an event, a To-Do List can help manage tasks related to planning, logistics, and coordination.
    Tasks like sending invitations, arranging catering, and setting up the venue can be organized and tracked(wedding)

Study and Homework:

    Students can use it to manage assignments, deadlines, and study sessions.
    Provides a clear overview of upcoming exams and tasks.
*/
