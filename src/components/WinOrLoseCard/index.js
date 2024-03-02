const WinOrLoseCard = props => {
  const {isWon, userScore, newGame} = props

  const resetGame = () => newGame(userScore)
  const resultImage = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const result = isWon ? 'You Won' : 'You Lose'
  const remarks = isWon ? 'Best Score' : 'Score'

  return (
    <div className="result-container">
      <img src={resultImage} alt="win or lose" />
      <h1>{result}</h1>
      <p>{remarks}</p>
      <p>{userScore}/12</p>
      <button type="button" className="reset" onClick={resetGame}>
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
