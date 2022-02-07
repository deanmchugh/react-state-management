import TaskInput from '../components/TaskInput'
import TodoList from '../components/TodoList'
import useTodoState from '../hooks/useTodoState'

function App() {
  const {
    error, tasks, updateTask, addTask,
  } = useTodoState()

  return (
    <div className="page">
      <div className="container">
        <TodoList error={error} tasks={tasks} updateTask={updateTask} />
        <TaskInput addTask={addTask} />
      </div>
    </div>
  )
}

export default App
