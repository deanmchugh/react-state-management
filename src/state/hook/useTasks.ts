import { Dispatch, useContext } from 'react'
import { Tasks } from '../../@types/Task'
import checkAllTasksCompleted from '../../helpers/checkAllTasksCompleted'
import { TasksContext } from '../context/TasksContextProvider'
import { Action } from '../reducer/taskReducer'

type TaskHook = {
  error?: string
  tasks: Tasks
  dispatch: Dispatch<Action>
  allTasksCompleted: boolean
}

function useTasks(): TaskHook {
  const context = useContext(TasksContext)
  const { state: { error, tasks }, dispatch } = context

  if (context === undefined) {
    throw new Error('useTasks must be used within a TasksProvider')
  }

  const allTasksCompleted = checkAllTasksCompleted(tasks)

  return {
    error, tasks, allTasksCompleted, dispatch,
  }
}

export default useTasks
