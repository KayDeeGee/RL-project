import Task from './Task';

function Tasks({ tasks, onUpdate, onDelete, onToggle }) {

    return (
        <>
            {tasks.map((task) => (
				<Task key={task.id} onUpdate={onUpdate} onDelete={onDelete} onToggle={onToggle} task={task}/>

			))}
        </>
    )
}

export default Tasks;