import { Task } from '../../@types/Task'
import { ContextState, STATUS } from '../../@types/TaskContext'
import createTask from '../../helpers/createTask'
import updateTasks from '../../helpers/updateTasks'

export enum TASK_ACTION {
    GET,
    ADD,
    UPDATE,
    ERROR
}

export type Actions = {type: TASK_ACTION.GET, payload: Task[]}
    | {type: TASK_ACTION.ADD, payload: {text: string}}
    | {type: TASK_ACTION.UPDATE, payload: {tasks: Task[], id: string}}
    | {type: TASK_ACTION.ERROR}

function taskReducer(state: ContextState, action: Actions) {
  switch (action.type) {
    case TASK_ACTION.GET: {
      return { status: STATUS.LOADED, tasks: action.payload }
    }
    case TASK_ACTION.ADD: {
      const tasks = [...state.tasks, createTask(action.payload)]
      return { ...state, tasks }
    }
    case TASK_ACTION.UPDATE: {
      const tasks = updateTasks(action.payload)
      return { ...state, tasks }
    }
    case TASK_ACTION.ERROR: {
      return { ...state, status: STATUS.ERROR }
    }
    default: return state
  }
}

export default taskReducer
