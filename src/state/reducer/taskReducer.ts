import createTask from '../../helpers/createTask'
import removeTask from '../../helpers/removeTask'
import updateTaskComplete from '../../helpers/updateTaskComplete'
import { State } from '../context/TasksContextProvider'

export enum TASK_ACTION {
    CREATE,
    UPDATE,
    DELETE,
    DELETE_ALL
}

export type Action = {type: TASK_ACTION.CREATE, payload: string}
    | {type: TASK_ACTION.UPDATE, payload: string}
    | {type: TASK_ACTION.DELETE, payload: string}
    | {type: TASK_ACTION.DELETE_ALL}

function taskReducer(state: State, action: Action) {
  const { type, payload = undefined } = { ...action }
  const { tasks } = state

  switch (type) {
    case TASK_ACTION.CREATE: return { tasks: [...tasks, createTask(payload)] }
    case TASK_ACTION.UPDATE: return { tasks: updateTaskComplete(payload, tasks) }
    case TASK_ACTION.DELETE: return { tasks: removeTask(payload, tasks) }
    case TASK_ACTION.DELETE_ALL: return { tasks: [] }
    default: return state
  }
}

export default taskReducer
