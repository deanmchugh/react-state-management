import TaskInput from '../components/TaskInput'
import TodoList from '../components/TodoList'
import { TasksContextProvider } from '../state/context/TasksContextProvider'

function App() {
  return (
    <TasksContextProvider>
      <div className="page">
        <div className="container">
          <TodoList />
          <TaskInput />
        </div>
      </div>
    </TasksContextProvider>
  )
}

export default App
