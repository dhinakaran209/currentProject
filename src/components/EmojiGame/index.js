import {Component} from 'react'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], isPlayingGame: true, topScore: 0}

  shuffleEmoji = () => {
      const {emojisList} = this.props
       return emojisList.sort(() => Math.random() - 0.5)
  }

  clickEmoji = () => {
    const shuffledEmoji = this.shuffleEmoji()
    return(
        {shuffledEmoji.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                shuffleEmoji={this.clickEmoji}
                emojiDetails={eachEmoji}
              />
            ))}
    )
  }

  render() {
    const {emojisList} = this.props

    return (
      <>
        <div className="main-container">
          <Navbar />
          <ul className="gaming-container">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                shuffleEmoji={this.clickEmoji}
                emojiDetails={eachEmoji}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default EmojiGame
