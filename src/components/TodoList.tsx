import handleTodoListContent from '../helpers/handleTodoListContent'
import DefaultMessage from './DefaultMessage'
import TodoItem from './TodoItem'

function TodoList() {
  const content = handleTodoListContent({ error, tasks })

  return (
    <div className="task-list">
      {
        typeof content === 'string'
          ? <DefaultMessage message={content} />
          : content.map((task) => <TodoItem key={task.id} task={task} updateTask={updateTask} />)
      }
    </div>
  )
}

export default TodoList
