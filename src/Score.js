class TennisScore {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  player1Scores() {
    this.player1Points += 1;
  }

  player2Scores() {
    this.player2Points += 1;
  }

  getScore() {
    if (this.player1Points === 1 && this.player2Points === 0) {
      return "15-Love";
    }

    if (this.player1Points === 0 && this.player2Points === 1) {
      return "Love-15";
    }

    if (this.player1Points === 1 && this.player2Points === 1) {
      return "15-15"; 
    }

    if (this.player1Points === 2 && this.player2Points === 1) {
      return "30-15";
    }

    if (this.player1Points === 1 && this.player2Points === 2) {
      return "15-30";
    }

    if(this.player1Points === 3 && this.player2Points === 3) {
      return "Deuce"
    }
    if(this.player1Points > 3 && this.player1Points === this.player2Points + 1) {
      return "Advantage Player 1";
    }
    return "Love-Love";
  }
}

export default TennisScore;
