import TaskInput from '../components/TaskInput'
import TodoList from '../components/TodoList'
import useTodoState from '../hooks/useTodoState'

function App() {
  const { error, tasks } = useTodoState()

  return (
    <div className="page">
      <div className="container">
        <TodoList error={error} tasks={tasks} />
        <TaskInput />
      </div>
    </div>
  )
}

export default App
