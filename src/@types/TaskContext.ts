import { Task } from './Task'

export enum STATUS {
    LOADING = 'loading',
    LOADED = 'loaded',
    ERROR = 'error'
}

export type ContextState = {status: STATUS, tasks: Task[]}
