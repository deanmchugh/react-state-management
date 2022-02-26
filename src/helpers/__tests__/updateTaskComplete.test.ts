import updateTaskComplete from '../updateTaskComplete'

describe('updateTaskComplete', () => {
  test('should update a task', () => {
    const tasks = [{
      id: '1',
      isCompleted: true,
      text: 'test',
    }, {
      id: '2',
      isCompleted: true,
      text: 'test',
    }]
    const updated = updateTaskComplete('1', tasks)
    expect(updated[0].isCompleted).toBe(false)
    expect(updated[1].isCompleted).toBe(true)
  })

  test('should not update a task', () => {
    const tasks = [{
      id: '1',
      isCompleted: true,
      text: 'test',
    }, {
      id: '2',
      isCompleted: true,
      text: 'test',
    }]
    const updated = updateTaskComplete('3', tasks)
    expect(updated[0].isCompleted).toBe(true)
    expect(updated[1].isCompleted).toBe(true)
  })
})
