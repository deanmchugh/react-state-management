import { Task } from '../@types/Task'

type Props = {
    task: Task
}

function TodoItem({ task }: Props) {
  const { text, isCompleted } = task

  return (
    <div>
      <h2>{text}</h2>
      <h2>{isCompleted ? 'COMPLETE' : 'INCOMPLETE'}</h2>
    </div>
  )
}

export default TodoItem
