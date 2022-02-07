type Props = {
  isComplete: boolean
  updateTask: () => void
}

function TickBox({ isComplete, updateTask }: Props) {
  return (
    <button
      onClick={() => updateTask()}
      className="tick-box"
      type="submit"
    >
      {
        isComplete
          ? <img src="./tick.png" alt="complete task button" width={25} />
          : null
      }
    </button>
  )
}

export default TickBox
