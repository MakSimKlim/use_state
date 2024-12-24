import {useState} from 'react';
import Task from './Task';
import Form from './Form';
import './Tasklist.css';

function Tasklist()
{
    let [tasks, setTasks] = useState
    (
        [
            {
                text:"Сходить в магаз",
                done: false

            },
            {
                text:"Полить цветы",
                done: false

            },
            {
                text:"Покормить кота",
                done: false

            },
            {
                text:"Сделать домашку",
                done: false

            },
        ]
    )
    let addTask = text =>
    {
        let newTask = [...tasks, {text}];
        setTasks(newTask);
    }

    let doneTask = index =>
    {
        let newTask = [...tasks];
        newTask[index].done = !newTask[index].done;
        setTasks(newTask);
    }
    let deleteTask = index =>
    {
        let newTask = [...tasks];
        newTask.splice(index,1);
        setTasks(newTask);
    }

    return(
        <div className="task-list">
            {
                tasks.map
                (
                    (task,index) => (
                        <Task key={index} task={task} index={index} doneTask={doneTask} deleteTask={deleteTask}/>
                    )
                )
            }
            <Form addTask={addTask}/>
        </div>
    )
}
export default Tasklist;