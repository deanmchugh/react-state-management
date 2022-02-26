import { ChangeEvent, useRef } from 'react'
import useTasks from '../../state/hook/useTasks'

function TaskInput() {
  const { addTask } = useTasks()
  const inputRef = useRef<HTMLInputElement>()
  const text = useRef<string>()

  const handleTaskSubmit = () => {
    addTask(text.current)
    text.current = ''
    inputRef.current.value = ''
  }

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    text.current = e.target.value
  }

  return (
    <div className="task-input-wrapper">
      <input
        onChange={handleTextInput}
        aria-label="task text input field"
        ref={inputRef}
        type="text"
      />
      <button
        onClick={() => handleTaskSubmit()}
        type="submit"
        aria-label="add task button"
      >
        ADD
      </button>
    </div>
  )
}

export default TaskInput
