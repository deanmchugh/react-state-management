import TodoList from '../components/TodoList'
import useTodoState from '../hooks/useTodoState'

function App() {
  const { error, tasks } = useTodoState()

  return (
    <div>
      <TodoList error={error} tasks={tasks} />
    </div>
  )
}

export default App
