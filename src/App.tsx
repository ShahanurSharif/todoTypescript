import {useState} from 'react'

type Priority = 'low' | 'medium' | 'high'
type Task = {
    id: number,
    title: string,
    isCompleted: boolean,
    priority?: Priority
}

function App() {
    const [tasks, setTasks] = useState<Task[]>([{id: 1, title: 'learn react', isCompleted: false}])
    const [taskName, setTaskName] = useState('')
    const onAddTask = () => {
        setTasks([
            ...tasks,
            {id: Date.now(), title: taskName, isCompleted: false}
        ])
    }
    return (
        <div>
            <h1>Tasks</h1>
            <label htmlFor="task-input">add task:</label>
            <input type="text" 
                   id="task-input" 
                   value={taskName} 
                   onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={onAddTask}>Add</button>
            <ul>
                {tasks.map((task)=>(
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;