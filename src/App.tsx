type Priority = 'low' | 'medium' | 'high';

type Task = {
    id: number;
    isCompleted: boolean;
    priority: Priority;
    title: string;
};

function App() {
    const tasks: Task[] = [
        {
            id: 1,
            isCompleted: false,
            priority: 'low',
            title: 'Task 1',
        }
    ];
    return (
        <div>
            <h1>Tasks</h1>
            <label htmlFor="task-input">type task</label>
            <input id="task-input" />
            <button type="submit">add</button>
            <ul>
                {
                    tasks.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default App;