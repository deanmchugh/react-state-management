type Props = {
    message: string
}

function DefaultMessage({ message }: Props) {
  return (
    <h2>{message}</h2>
  )
}

export default DefaultMessage
