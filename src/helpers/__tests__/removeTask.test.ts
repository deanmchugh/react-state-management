import removeTask from '../removeTask'

describe('removeTask', () => {
  test('to remove task', () => {
    const tasks = [{
      id: '1',
      isCompleted: true,
      text: 'test',
    }, {
      id: '2',
      isCompleted: true,
      text: 'test',
    }]
    const removed = removeTask('1', tasks)
    expect(removed.length).toBe(1)
    expect(removed[0].id).toBe('2')
  })

  test('to not remove task', () => {
    const tasks = [{
      id: '1',
      isCompleted: true,
      text: 'test',
    }, {
      id: '2',
      isCompleted: true,
      text: 'test',
    }]
    const removed = removeTask('3', tasks)
    expect(removed.length).toBe(2)
    expect(removed[0].id).toBe('1')
  })
})
