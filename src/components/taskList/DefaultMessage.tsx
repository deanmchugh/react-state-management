type Props = {
  text: string
}

function DefaultMessage({ text }: Props) {
  return (
    <div className="default-message-wrapper">
      <img src="./alert.png" alt="Alert message" width={35} height={35} />
      {text}
    </div>
  )
}

export default DefaultMessage
