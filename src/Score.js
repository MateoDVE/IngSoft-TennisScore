class TennisScore {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  player1Scores() {
    this.player1Points += 1;
  }

  getScore() {
    if (this.player1Points === 1 && this.player2Points === 0) {
      return "15-Love";
    }
    
    return "Love-Love";
  }
}

export default TennisScore;
