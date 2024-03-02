import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isPlaying} = props

  return (
    <nav className="nav-bar">
      <div className="logo-nav">
        <img
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="score-nav">
        <p>Score: {currentScore} </p>
        <p>Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
