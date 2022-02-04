import { Task } from '../@types/Task'
import handleTodoListContent from '../helpers/handleTodoListContent'
import DefaultMessage from './DefaultMessage'
import TodoItem from './TodoItem'

type Props = {
  error: string
  tasks: Task[]
}

function TodoList({ error, tasks }: Props) {
  const content = handleTodoListContent({ error, tasks })

  return (
    <div>
      {
        typeof content === 'string'
          ? <DefaultMessage message={content} />
          : content.map((task) => <TodoItem key={task.id} task={task} />)
      }
    </div>
  )
}

export default TodoList
