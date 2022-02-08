import createTask from '../createTask'

describe('createTask', () => {
  test('should create task', () => {
    const task = createTask({ text: 'new task' })
    expect(task.text).toBe('new task')
    expect(task.isCompleted).toBe(false)
    expect(task).toHaveProperty('created')
    expect(task).toHaveProperty('modified')
    expect(task).toHaveProperty('id')
  })
})
