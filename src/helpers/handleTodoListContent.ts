import { Task } from '../@types/Task'

enum USER_MESSAGES {
  FETCH_ERROR = 'Problem getting tasks',
  PROMPT_ADD_TASK = 'Add a task'
}

type Props = {
    error?: string
    tasks?: Task[]
}

function handleTodoListContent({ error, tasks }: Props) {
  if (error) return error
  if (!tasks) return USER_MESSAGES.FETCH_ERROR
  if (tasks.length === 0) return USER_MESSAGES.PROMPT_ADD_TASK
  return tasks
}

export default handleTodoListContent
