// Write your code here

import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isTrue: true}

  ChangeText = () => {
    this.setState(prev => ({isTrue: !prev.isTrue}))
  }

  render() {
    const {isTrue} = this.state

    const Text = isTrue ? 'subscribe' : 'subscribed'

    return (
      <div className="Main-Container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          className="subscribe-btn"
          type="button"
          onClick={this.ChangeText}
        >
          {Text}
        </button>
      </div>
    )
  }
}

export default Welcome
