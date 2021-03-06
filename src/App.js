
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { useState } from 'react';
import DeleteTasksButton from './components/DeleteTasksButton';
import HideButton from './components/HideButton';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    }
  ]);

const [showAddTask, setShowAddTask] = useState(false)
const [deleteTasks, setDeleteTasks] = useState(true)
const [hideTasks, setHideTasks] = useState(true)

const deleteTask = (deletedTaskId) => {
setTasks(tasks.filter((task) => task.id !== deletedTaskId))
}

const addTask = (newTask) => {
  const id = Math.floor(Math.random() * 100 +1)
  const addNewTask = {id, ...newTask}
  setTasks([...tasks, addNewTask])

}

const toggleDone = (toggleDoneId) => {
  setTasks(
    tasks.map(
      (task) => task.id === toggleDoneId ? {...task, isDone: !task.isDone} : task
      )
  )
}


const toggleShow = () => {
  setShowAddTask(!showAddTask);
}


//Delete all task
const deleteAllTasks = () => {
  // setDeleteTasks(false)
  setTasks([]);
}

const hideAllTasks = () => {
  setHideTasks(!hideTasks)
}



  return (
    <div className="container">
      <Header title="TASK TRACKER" toggleShow = {toggleShow} showAddTask={showAddTask}/>
      {showAddTask && <AddTask addTask={addTask} />}
      <HideButton hideAllTasks={hideAllTasks} text= {hideTasks ? "Hide All Tasks" : "Show All Tasks"} />
      <DeleteTasksButton deleteAllTasks = {deleteAllTasks} deleteTasks = {deleteTasks} />
      {
      tasks.length > 0 && hideTasks ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone}/> : 
      <p style={{textAlign: "center"}}>NO TASK TO SHOW</p>
      }
      
    </div>
  );
}

export default App;
