import { Task } from '../../@types/Task'
import useTasks from '../../state/hook/useTasks'
import { TASK_ACTION } from '../../state/reducer/taskReducer'
import TickBox from './TickBox'

type Props = {
  task: Task
}

function TaskItem({ task }: Props) {
  const { dispatch } = useTasks()
  const { id, text, isCompleted } = task

  return (
    <div className="task-item-wrapper">
      <div>
        <TickBox
          updateTask={() => dispatch({ type: TASK_ACTION.UPDATE, payload: id })}
          isComplete={isCompleted}
        />
        {text}
      </div>
      <button
        onClick={() => dispatch({ type: TASK_ACTION.DELETE, payload: id })}
        aria-label="delete task button"
        type="submit"
      >
        <img src="./bin.png" alt="delete task" width={25} height={25} />
      </button>
    </div>
  )
}

export default TaskItem
