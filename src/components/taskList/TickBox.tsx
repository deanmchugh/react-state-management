type Props = {
  isComplete: boolean
  updateTask: () => void
}

function TickBox({ isComplete, updateTask }: Props) {
  return (
    <button
      onClick={() => updateTask()}
      className="tick-box-button"
      aria-label="toggle task completion button"
      type="submit"
    >
      {
        isComplete
          ? <img src="./tick.png" alt="task complete" width={23} height={23} />
          : null
      }
    </button>
  )
}

export default TickBox
