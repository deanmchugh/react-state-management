type Props = {
    message: string
}

function DefaultMessage({ message }: Props) {
  return (
    <div className="default-message">
      <img src="./alert.png" alt="user notification icon" width={35} />
      <p>{message}</p>
    </div>
  )
}

export default DefaultMessage
