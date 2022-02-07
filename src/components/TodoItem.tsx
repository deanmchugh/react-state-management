import { Task } from '../@types/Task'
import TickBox from './TickBox'

type Props = {
    task: Task
}

function TodoItem({ task }: Props) {
  const { text, isCompleted } = task

  return (
    <div className="task-item">
      <div className="task-tick-text-group">
        <TickBox isComplete={isCompleted} />
        <p>{text}</p>
      </div>
      <button
        className="delete-button"
        type="submit"
      >
        <img src="./bin.png" alt="task delete button" width={30} />
      </button>
    </div>
  )
}

export default TodoItem
