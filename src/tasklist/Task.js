function Task(props)
{
    return(
        <div className="task">
            {props.task.text}
            <button>DONE</button>
        </div>
    )
}
export default Task;