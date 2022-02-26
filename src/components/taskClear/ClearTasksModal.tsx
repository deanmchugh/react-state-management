import { useEffect, useState } from 'react'
import useTasks from '../../state/hook/useTasks'

function ClearTasksModal() {
  const { allTasksCompleted, clearTasks } = useTasks()
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
          onClick={() => clearTasks()}
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
