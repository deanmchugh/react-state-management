import { useContext } from 'react'
import { ContextState } from '../../@types/TaskContext'
import { TasksContext } from '../context/TasksContextProvider'
import createTask from '../../helpers/createTask'
import updateTasks from '../../helpers/updateTasks'
import { TASK_ACTION } from '../reducers/taskReducer'

type TaskHook = {
    data: ContextState
    updateTask: (id: string) => void
    addTask: (text: string) => void
}

function useTasks(): TaskHook {
  const context = useContext(TasksContext)
  const [data, dispatch] = context

  const updateTask = (id: string) => dispatch({
    type: TASK_ACTION.UPDATE,
    payload: {
      tasks: data.tasks,
      id,
    },
  })

  const addTask = (text: string) => {
    const tasks = data.tasks.concat(createTask({ text }))
    setData({ ...data, tasks })
  }

  return {
    data, setData, updateTask, addTask,
  }
}

export default useTasks
