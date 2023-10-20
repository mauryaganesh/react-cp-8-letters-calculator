import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    letters: '',
  }

  onChange = event => {
    this.setState({letters: event.target.value})
  }

  getLetterCount = () => {
    const {letters} = this.state
    return letters.length
  }

  render() {
    const lettersCount = this.getLetterCount()
    return (
      <div className="bg-container">
        <div className="detail-container">
          <h1>Calculate the letters you enter</h1>
          <label htmlFor="phrase-count">Enter the phrase</label>
          <input
            type="text"
            id="phrase-count"
            placeholder="Enter the phrase"
            onChange={this.onChange}
          />
          <p className="result">No.of letters: {lettersCount}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
