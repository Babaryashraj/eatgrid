import React, { useState } from 'react'
import "./TodoList.css";

const TodoList = () => {
     const [task , setTask] = useState([]);
     const [newTasks , setNewTaks] = useState("");

     function handleInputChanges(event){
        setNewTaks(event.target.value);
     }

     function addTask(){
          if(newTasks.trim() !== ""){
            setTask(task => [...task , newTasks]);
            setNewTaks("");
          }
        }

     function deleteTask(index){
            const update = task.filter((element,i) => i !== index);
            setTask(update);
     }

    function movetaskUp(index){
       if(index >0){
        const updatedTakes = [...task];
        [updatedTakes[index],updatedTakes[index-1]] = 
        [updatedTakes[index-1],updatedTakes[index]];
        setTask(updatedTakes);

       }
    }

    function movetaskDown(index){
            if(index < task.length-1){
        const updatedTakes = [...task];
        [updatedTakes[index],updatedTakes[index+1]] = 
        [updatedTakes[index+1],updatedTakes[index]];
        setTask(updatedTakes);

       }
    }

  return (
    <div className='todo-list'>
        <h1>Todo-List</h1>
        <div>
           <input type="text" 
           placeholder='enter the task'
           onChange={handleInputChanges}
           />

           <button className='add-button' onClick={addTask}>Add</button>

        </div>

        <ol>
            {task.map((obj , index) =>
            <li key={index}>
                <span className='text'>{obj}</span>
                <button className='delete-button' onClick={() =>deleteTask(index)}>Delete</button>
                 <button className='moveup-button' onClick={() =>movetaskUp(index)}>Up</button>
                 <button className='movedown-button' onClick={() =>movetaskDown(index)}>Down</button>
            </li>



            )}
        </ol>
     
    </div>
  )
}

export default TodoList;
