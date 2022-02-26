import { Tasks } from '../@types/Task'

function updateTaskComplete(id: string, tasks: Tasks): Tasks {
  return tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        isCompleted: !task.isCompleted,
      }
    }
    return task
  })
}

export default updateTaskComplete
