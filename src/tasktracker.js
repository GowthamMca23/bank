import { useState } from "react";
import './App.css'

function Tasktracker(){
    const[task,setTask]=useState([]);
    const[Item,setItem]=useState(' ');
  
    function handler(){
       let tasktime=getTime();
       let list=[...task,{task:Item,time:tasktime}]
       console.log(list);
       setTask(list);
 }

function getTime(){
 const now =new Date();
 const hours = now.getHours();
 const minutes = now.getMinutes();
 const seconds = now.getSeconds();
let totaltime=`${hours} : ${minutes} : ${seconds}  ${hours>12 ? 'PM': 'AM'}`
 return totaltime;
}

function handleKeyDown(event) {
    const { key } = event;
   if (key === 'Enter') {
        handler();
    } 
  }
  
    return(
        <>
        <div id="task">
        <h1 >Task Tracker</h1>
        <h4>Input Tasks that have been completed below and keep track of the time when each item was added</h4>
        {task.map((item)=><li id="tasktrack">{item.task}  -  {item.time}(-)</li>)}<br/>
        <input type="text" placeholder="Add Event" onChange={(e)=>{setItem(e.target.value)}} onKeyDown={handleKeyDown} /> Press Enter to Submit
        </div> 
        </>
    )
}
export default Tasktracker;