import { useEffect, useState } from 'react'
import useTasks from '../../state/hook/useTasks'

function ErrorModal() {
  const { error } = useTasks()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(error)
  }, [error])

  return (
    <dialog
      className="modal-wrapper"
      open={open}
    >
      An Error Has Occured!
      <button
        aria-label="close modal"
        onClick={() => setOpen(false)}
        type="button"
      >
        OK
      </button>
    </dialog>
  )
}

export default ErrorModal
