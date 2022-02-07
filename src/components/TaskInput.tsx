function TaskInput() {
  return (
    <form
      className="task-input"
    >
      <input
        className="input-field"
        type="text"
        alt="task text input field"
      />
      <button
        className="submit-button"
        type="submit"
      >
        ADD
      </button>
    </form>
  )
}

export default TaskInput
