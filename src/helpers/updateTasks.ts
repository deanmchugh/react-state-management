import { Task } from '../@types/Task'

type Props = {
    tasks: Task[]
    id: string
}

function updateTasks({ tasks, id }: Props) {
  const updatedTasks = tasks.map((t) => {
    if (t.id === id) {
      return {
        ...t,
        isCompleted: !t.isCompleted,
        modified: new Date().toISOString(),
      }
    }
    return t
  })
  return updatedTasks
}

export default updateTasks
