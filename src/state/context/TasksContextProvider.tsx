import {
  createContext, Dispatch, ReactChild, useMemo, useReducer,
} from 'react'
import { Tasks } from '../../@types/Task'
import taskReducer, { Action } from '../reducer/taskReducer'

export type State = {error?: string, tasks: Tasks}

const initalState: State = { tasks: [] }

export type Context = {state: State, dispatch: Dispatch<Action>}

export const TasksContext = createContext<Context>(undefined)

type Props = {
  children: ReactChild
}

export function TasksContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(taskReducer, initalState)
  const value: Context = useMemo(() => ({ state, dispatch }), [state])

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  )
}
