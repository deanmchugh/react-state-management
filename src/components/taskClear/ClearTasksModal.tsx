import { useEffect, useState } from 'react'
import useTasks from '../../state/hook/useTasks'
import { TASK_ACTION } from '../../state/reducer/taskReducer'

function ClearTasksModal() {
  const { allTasksCompleted, dispatch } = useTasks()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(allTasksCompleted)
  }, [allTasksCompleted])

  return (
    <dialog
      className="modal-wrapper"
      open={open}
    >
      All Tasks Completed!
      <div>
        <button
          aria-label="clear all tasks"
          onClick={() => dispatch({ type: TASK_ACTION.DELETE_ALL })}
          type="submit"
        >
          Clear All
        </button>
        <button
          aria-label="close modal"
          onClick={() => setOpen(false)}
          type="button"
        >
          Cancel
        </button>
      </div>
    </dialog>
  )
}

export default ClearTasksModal
