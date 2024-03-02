import {Component} from 'react'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], isPlayingGame: true, topScore: 0}

  shuffleEmoji = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  newGame = () => {
    this.setState({clickedEmojisList: [], isPlayingGame: true})
  }

  renderShuffleEmoji = () => {
    const shuffledEmojiList = this.shuffleEmoji()

    return (
      <ul className="gaming-container">
        {shuffledEmojiList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            clickedEmoji={this.clickEmoji}
            emojiDetails={eachEmoji}
          />
        ))}
      </ul>
    )
  }

  wonOrLoseCard = () => {
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        newGame={this.newGame}
        userScore={clickedEmojisList.length}
      />
    )
  }

  completeGame = currentTop => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentTop > topScore) {
      newTopScore = currentTop
    }
    this.setState({topScore: newTopScore, isPlayingGame: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isPresent = clickedEmojisList.includes(id)
    const clickedLength = clickedEmojisList.length

    if (isPresent) {
      this.completeGame(clickedLength)
    } else {
      if (emojisList.length - 1 === clickedLength) {
        this.completeGame(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  render() {
    const {emojisList} = this.props

    const {clickedEmojisList, isPlayingGame, topScore} = this.state

    console.log(clickedEmojisList)

    return (
      <>
        <div className="main-container">
          <Navbar
            currentScore={clickedEmojisList.length}
            isPlayingGame={isPlayingGame}
            topScore={topScore}
          />
          <div>
            {isPlayingGame ? this.renderShuffleEmoji() : this.wonOrLoseCard()}
          </div>
        </div>
      </>
    )
  }
}

export default EmojiGame
