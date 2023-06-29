import React, {useState} from "react";
import {FcTodoList} from 'react-icons/fc';
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai';

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')
  
// add tasks

  const handleSubmit = (event) => {
    event.preventDefault()
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false
    }
    setTasks([...tasks, addTask])
    setInput('')
  }

  // delete tasks
  const deleteTask = (id) =>{
    let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id)
    setTasks(filteredTasks)
    console.log('task deleted')
  }

  // toggle completed tasks
  const toggleComlete = (id) =>{
    setTasks(
      tasks.map(task => (
        task.id === id ? {...task, completed: !task.completed} : task
      ))
    )
  }

const date = new Date()
console.log(date)
const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "Пятниця", "Субота", "Неділя"]
const months = ["Січня", "Лютого", "Березня", "Квітня", "Травня", "Червня", "Липня", "Серпня","Вересня", "Жовтня", "Листопада", "Грудня"]


return (
    <div className="app">
      <div className="container">
        <h1><FcTodoList />To Do List</h1>

    <div className="date">
      <p>{days[date.getDay()]}</p>
      <p>{date.getDate()}</p>
      <p>{months[date.getMonth()]}</p>
      <p>{date.getFullYear()}</p>
    </div>

        <form onSubmit={handleSubmit}>
          <div className="form-input">  
          <AiOutlinePlus className="icon"/>
          <input 
            value={input}
            onChange={event => setInput(event.target.value)}
            placeholder="Додати завдання" 
            type="text"/>
            </div>
        
        </form>

        <div>
          {tasks.map(task => (
            <div className={`task-row ${task.completed ? 'completed' : ''}`} key={task.id} onDoubleClick={() => toggleComlete(task.id)} >
              <p>{task.text}</p> 
              <AiOutlineClose onClick={() => deleteTask(task.id)} className="icon"/>
            </div>
          ))}
        </div>
          <p className="length">{(tasks < 1) ? 'Завдань немає' : `Кількість завдань: ${tasks.length}`}</p>
      </div>
    </div>
  );
}

export default App;
