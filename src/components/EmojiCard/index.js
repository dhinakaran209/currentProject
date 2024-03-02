import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickedEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails
  const emojiPressed = () => clickedEmoji(id)

  return (
    <li className="emoji">
      <button onClick={emojiPressed} className="emoji-button" type="button">
        <img className="emoji-size" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
