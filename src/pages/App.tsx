import TaskInput from '../components/taskInput/TaskInput'
import TaskList from '../components/taskList/TaskList'
import { TasksContextProvider } from '../state/context/TasksContextProvider'

function App() {
  return (
    <TasksContextProvider>
      <div className="page-wrapper">
        <TaskList />
        <TaskInput />
      </div>
    </TasksContextProvider>
  )
}

export default App
