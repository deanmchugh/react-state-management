import updateTasks from '../updateTasks'

const tasks = [
  {
    id: 'a5c90037-ce23-4a85-9ad5-18dc323aec49',
    text: 'Task 1',
    isCompleted: false,
    created: '2022-01-01T05:45:22.000Z',
    modified: '2022-01-01T05:45:22.000Z',
  },
]

describe('updateTask', () => {
  test('shoudld update task', () => {
    const id = 'a5c90037-ce23-4a85-9ad5-18dc323aec49'
    const newTasks = updateTasks({ tasks, id })
    const task = newTasks.find((t) => t.id === id)
    expect(task.isCompleted).toBe(true)
  })
})
