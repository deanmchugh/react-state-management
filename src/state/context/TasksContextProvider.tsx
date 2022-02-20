import {
  createContext, Dispatch, ReactChild, useEffect, useMemo, useReducer,
} from 'react'
import { ContextState, STATUS } from '../../@types/TaskContext'
import fetchJSONData from '../../helpers/fetchJSONData'
import taskReducer, { Actions, TASK_ACTION } from '../reducers/taskReducer'

const initialState: ContextState = {
  status: STATUS.LOADING,
  tasks: [],
}

type Action = Dispatch<Actions>

export const TasksContext = createContext<[ContextState, Action]>(null)

type Props = {
    children: ReactChild
}

export function TasksContextProvider({ children }: Props) {
  const [data, dispatch] = useReducer(taskReducer, initialState)
  const value: [ContextState, Action] = useMemo(() => [data, dispatch], [data])

  useEffect(() => {
    fetchJSONData('tasks.json').then((res) => (
      typeof res === 'string'
        ? dispatch({ type: TASK_ACTION.ERROR })
        : dispatch({ type: TASK_ACTION.GET, payload: res })
    ))
  }, [])

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  )
}
