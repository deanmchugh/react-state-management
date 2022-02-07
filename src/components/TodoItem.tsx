import { Task } from '../@types/Task'
import TickBox from './TickBox'

type Props = {
    task: Task
    updateTask: (id: string) => void
}

function TodoItem({ task, updateTask }: Props) {
  const { id, text, isCompleted } = task

  return (
    <div className="task-item">
      <TickBox isComplete={isCompleted} updateTask={() => updateTask(id)} />
      <p>{text}</p>
    </div>
  )
}

export default TodoItem
