import { useEffect, useState } from 'react'
import { Task } from '../@types/Task'
import fetchJSONData from '../helpers/fetchJSONData'

type TodoHook = {
  error: string
  tasks: Task[]
}

export function useTodoState(): TodoHook {
  const [tasks, setTasks] = useState<Task[]>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    fetchJSONData('tasks.json').then((data) => (typeof data === 'string' ? setError(data) : setTasks(data)))
  }, [])

  return {
    error,
    tasks,
  }
}

export default useTodoState
