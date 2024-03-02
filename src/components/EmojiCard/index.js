import './index.css'

const EmojiCard = props => {
  const {emojiDetails, shuffleEmoji} = props
  const {emojiUrl, emojiName} = emojiDetails
  const emojiPressed = () => shuffleEmoji()

  return (
    <li className="emoji">
      <button onClick={emojiPressed} className="emoji-button" type="button">
        <img className="emoji-size" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
