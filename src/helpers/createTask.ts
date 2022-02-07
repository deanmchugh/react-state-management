import { v4 as uuidv4 } from 'uuid'
import { Task } from '../@types/Task'

type Props = {
    text: string
}

function createTask({ text }: Props) {
  const date = new Date().toISOString()
  const newTask: Task = {
    id: uuidv4(),
    text,
    isCompleted: false,
    created: date,
    modified: date,
  }
  return newTask
}

export default createTask
