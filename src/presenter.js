import TennisScore from "./Score.js";

const form = document.querySelector("#tennis-score-form");
const div = document.querySelector("#resultado-div");

const game = new TennisScore();


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const player1Points = parseInt(document.querySelector("#jugador1-puntos").value);
  const player2Points = parseInt(document.querySelector("#jugador2-puntos").value);

  for (let i = 0; i < player1Points; i++) {
    game.player1Scores();
  }
  
  for (let i = 0; i < player2Points; i++) {
    game.player2Scores();
  }
  div.textContent = game.getScore();
});
