import { v4 as uuidv4 } from 'uuid'
import { Task } from '../@types/Task'

function createTask(text: string): Task {
  return {
    id: uuidv4(),
    text,
    isCompleted: false,
  }
}

export default createTask
