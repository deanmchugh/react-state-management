import useTasks from '../../state/hook/useTasks'
import ErrorModal from '../error/ErrorModal'
import ClearTasksModal from '../taskClear/ClearTasksModal'
import DefaultMessage from './DefaultMessage'
import TaskItem from './TaskItem'

function TaskList() {
  const { tasks } = useTasks()

  return (
    <div className="task-list-wrapper">
      {
        tasks.length > 0
          ? tasks.map((task) => <TaskItem key={task.id} task={task} />)
          : <DefaultMessage text="No Current Tasks" />
      }
      <ClearTasksModal />
      <ErrorModal />
    </div>
  )
}

export default TaskList
