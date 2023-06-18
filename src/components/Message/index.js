// Write your code here
import './index.css'

const Message = props => {
  const {checkLogin} = props
  const message = checkLogin ? 'Welcome User' : 'Please Login'

  return <h1 className="message">{message}</h1>
}

export default Message
