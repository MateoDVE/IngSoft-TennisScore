import TennisScore from "./Score.js";

describe('Tennis Scorer', () => {

  it("debería retornar 'Love-Love' al comenzar el juego", () => {
    const game = new TennisScore();
    expect(game.getScore()).toEqual("Love-Love");
  });

  it("debería retornar '15-Love' cuando el Jugador 1 anota", () => {
    const game = new TennisScore();
    game.player1Scores();
    expect(game.getScore()).toEqual("15-Love");
  });

});
