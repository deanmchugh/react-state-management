import { useRef } from 'react'

type Props = {
  addTask: (text: string) => void
}

function TaskInput({ addTask }: Props) {
  const inputRef = useRef<HTMLInputElement>()
  const text = useRef<string>()

  const handleTextInput = (input: string) => {
    text.current = input
  }

  const handleTextSubmit = () => {
    if (text.current && text.current.length > 0) {
      addTask(text.current)
      inputRef.current.value = ''
    }
  }

  return (
    <div
      className="task-input"
    >
      <input
        onChange={(e) => handleTextInput(e.target.value)}
        alt="task text input field"
        className="input-field"
        ref={inputRef}
        type="text"
      />
      <button
        onClick={() => handleTextSubmit()}
        className="submit-button"
        type="submit"
      >
        ADD
      </button>
    </div>
  )
}

export default TaskInput
