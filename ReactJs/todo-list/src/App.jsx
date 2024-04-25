import React, { useState } from 'react'
import Display from './Display';
import Input from './Input';

function App() {
    const [tasks, setTask] = useState(['Task1', 'Task2', 'Task3', 'Task4']);

    const addTaskHandler = (data) => {
        const newTasks = [...tasks, data];
        setTask(newTasks);
    }


   

    const removeHandler = (index) => {
        const newTasks = tasks.filter(
            (d, i) => {
                if (i == index) return false;
                else return true;
            }
        )
        setTask(newTasks);
    }

    

 

    return (
        <div className="container">
            <Input addHandler={addTaskHandler} />
            <Display task={tasks} removeHandler={removeHandler} />
        </div>
    )
}

export default App;
