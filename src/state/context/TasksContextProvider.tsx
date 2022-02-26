import {
  createContext, ReactChild, useMemo, useState,
} from 'react'
import { Tasks } from '../../@types/Task'

type State = {error: boolean, tasks: Tasks}

const initalState: State = { error: false, tasks: [] }

type Action = (tasks: Tasks) => void
type Context = [State, Action]

export const TasksContext = createContext<Context>(null)

type Props = {
  children: ReactChild
}

export function TasksContextProvider({ children }: Props) {
  const [context, setContext] = useState(initalState)

  const errorHandler = (tasks: Tasks) => {
    try {
      setContext({ error: false, tasks })
    } catch (e) {
      setContext({ error: true, tasks })
    }
  }

  const value: Context = useMemo(() => [context, errorHandler], [context])

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  )
}
