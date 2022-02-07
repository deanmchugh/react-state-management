type Props = {
  isComplete: boolean
}

function TickBox({ isComplete }: Props) {
  return (
    <div className="tick-box">
      {
        isComplete
          ? <img src="./tick.png" alt="complete task button" width={25} />
          : null
      }
    </div>
  )
}

export default TickBox
