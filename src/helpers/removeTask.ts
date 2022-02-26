import { Tasks } from '../@types/Task'

function removeTask(id: string, tasks: Tasks): Tasks {
  return tasks.filter((task) => task.id !== id)
}

export default removeTask
