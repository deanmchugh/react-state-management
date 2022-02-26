import { Tasks } from '../@types/Task'

function checkAllTasksCompleted(tasks: Tasks): boolean {
  return tasks.length > 0 && !tasks.some((task) => task.isCompleted === false)
}

export default checkAllTasksCompleted
