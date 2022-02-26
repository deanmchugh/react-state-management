import checkAllTasksCompleted from '../checkAllTasksCompleted'

describe('checkAllTasksComplete', () => {
  test('should return true', () => {
    const tasks = [{
      id: '1',
      isCompleted: true,
      text: 'test',
    }, {
      id: '2',
      isCompleted: true,
      text: 'test',
    }]
    const completed = checkAllTasksCompleted(tasks)
    expect(completed).toBe(true)
  })

  test('should return false', () => {
    const tasks = [{
      id: '1',
      isCompleted: true,
      text: 'test',
    }, {
      id: '2',
      isCompleted: false,
      text: 'test',
    }]
    const completed = checkAllTasksCompleted(tasks)
    expect(completed).toBe(false)
  })
})
