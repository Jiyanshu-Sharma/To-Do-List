import React, { useState } from 'react';

function TodoList() {
    const [task, setTask] = useState('');                     // Task Input
    const [tasks, setTasks] = useState([]);                   // Task List

    const addTask = (event) => {
      event.preventDefault();    //refresh the page
        if (task) {                               //not empty
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const deleteTask = (task) => {           //new array with deleted task 
        setTasks(tasks.filter(taskItem => taskItem !== task));
    };

    return (
        <div>
          <h1>To-DO List</h1>
            <form onSubmit={addTask}>
                <input 
                    type="text" 
                    placeholder="Add a task" 
                    value={task} 
                    onChange={e => setTask(e.target.value)} 
                />
                <button type="submit">Add</button>
            </form>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}                  
                        <button onClick={() => deleteTask(task)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;