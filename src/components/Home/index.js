// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {checkLogin: false}

  onClickBtn = () => {
    this.setState(prevState => ({checkLogin: !prevState.checkLogin}))
  }

  render() {
    const {checkLogin} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <Message checkLogin={checkLogin} />
          {checkLogin ? (
            <Logout logout={this.onClickBtn} />
          ) : (
            <Login login={this.onClickBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
