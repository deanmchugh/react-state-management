import { useEffect, useState } from 'react'
import { Task } from '../@types/Task'
import createTask from '../helpers/createTask'
import fetchJSONData from '../helpers/fetchJSONData'
import updateTasks from '../helpers/updateTasks'

type TodoHook = {
  error: string
  tasks: Task[]
  updateTask: (id: string) => void
  addTask: (text: string) => void
}

export function useTodoState(): TodoHook {
  const [tasks, setTasks] = useState<Task[]>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    fetchJSONData('tasks.json').then((data) => (
      typeof data === 'string' ? setError(data) : setTasks(data)
    ))
  }, [])

  const updateTask = (id: string) => {
    setTasks(updateTasks({ tasks, id }))
  }

  const addTask = (text: string) => {
    setTasks(tasks.concat(createTask({ text })))
  }

  return {
    error,
    tasks,
    updateTask,
    addTask,
  }
}

export default useTodoState
