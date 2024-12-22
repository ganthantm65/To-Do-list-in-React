import React,{useState} from "react";
import style from '/home/ganthan/Documents/projects/react/todo-app/src/App.css';


function ToDo() {
    const [tasks,setTask]=useState([]);

    const [newTask,setNewTask]=useState("")

    const [time,setTime]=useState("")

    const updateTask = () => {
        if (newTask.trim() && time) { 
            const task = { task: newTask, time: time };
            setTask([...tasks, task]);
            setNewTask("");  
            setTime("");     
        } else {
            alert("Please enter a task and a valid time.");
        }
    };

    const deleteTask=(index)=>{
        setTask(tasks.filter((_,i)=>i!==index))
    }

    const updateNewTask=(event)=>{
        setNewTask(t=>
                t=event.target.value);
    }

    const updateTime=(event)=>{
        setTime(t=>t=event.target.value);
    }
    

    return(
        <div className="App">
            <h1>To-Do List</h1>
            <input type="text" onChange={updateNewTask} className="task" placeholder="Enter the task"/><br />
            <input type="time" onChange={updateTime} className="time"/><br />
            <button onClick={updateTask} className="add-btn">Add</button><br />
            <div className="List">
                {tasks.map((task,index)=>{
                    return(
                    <div key={index+1}>
                        <p>{task.task}</p>
                        <p>{task.time}</p>
                        <button onClick={()=>deleteTask(index)} className="delete">Delete</button>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ToDo