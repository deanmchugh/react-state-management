import { Task } from '../../@types/Task'
import handleTodoListContent from '../handleTodoListContent'

describe('handleTodoListContent', () => {
  test('should return error', () => {
    const error = 'error'
    const tasks: Task[] = []
    const content = handleTodoListContent({ error, tasks })
    expect(content).toBe('error')
    expect(content).not.toBe([])
  })

  test('should return fetch error', () => {
    const content = handleTodoListContent({})
    expect(content).toBe('Problem getting tasks')
  })

  test('should return add task prompt', () => {
    const tasks: Task[] = []
    const content = handleTodoListContent({ tasks })
    expect(content).toBe('Add a task')
  })

  test('should return tasks', () => {
    const tasks = [{
      id: 'a5c90037-ce23-4a85-9ad5-18dc323aec49',
      text: 'Task 1',
      isCompleted: false,
      created: '2022-01-01T05:45:22.000Z',
      modified: '2022-01-01T05:45:22.000Z',
    }]
    const content = handleTodoListContent({ tasks })
    expect(content).toBe(tasks)
  })
})
