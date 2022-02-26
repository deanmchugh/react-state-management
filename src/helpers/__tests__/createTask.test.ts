import createTask from '../createTask'

describe('createTask', () => {
  test('to create task', () => {
    const test = 'test'
    const task = createTask(test)
    expect(task).toHaveProperty('id')
    expect(task).toHaveProperty('text')
    expect(task.text).toBe(test)
    expect(task).toHaveProperty('isCompleted')
    expect(task.isCompleted).toBe(false)
  })
})
