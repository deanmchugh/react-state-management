import { Task } from '../../@types/Task'
import useTasks from '../../state/hook/useTasks'
import TickBox from './TickBox'

type Props = {
  task: Task
}

function TaskItem({ task }: Props) {
  const { updateTask, deleteTask } = useTasks()
  const { id, text, isCompleted } = task

  return (
    <div className="task-item-wrapper">
      <div>
        <TickBox isComplete={isCompleted} updateTask={() => updateTask(id)} />
        {text}
      </div>
      <button
        aria-label="delete task button"
        onClick={() => deleteTask(id)}
        type="submit"
      >
        <img src="./bin.png" alt="delete task" width={25} height={25} />
      </button>
    </div>
  )
}

export default TaskItem
