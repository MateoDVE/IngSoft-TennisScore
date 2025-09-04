import TennisScore from "./Score.js";

describe('Tennis Scorer', () => {

  it("debería retornar 'Love-Love' al comenzar el juego", () => {
    const game = new TennisScore();
    expect(game.getScore()).toEqual("Love-Love");
  });

  it("debería retornar '15-Love' cuando el Jugador 1 anota un punto", () => {
    const game = new TennisScore();
    game.player1Scores(); 
    expect(game.getScore()).toEqual("15-Love");
  });

  it("debería retornar '15-15' cuando ambos jugadores anotan una vez", () => {
    const game = new TennisScore();
    game.player1Scores(); 
    game.player2Scores(); // El Jugador 2 anota
    expect(game.getScore()).toEqual("15-15"); // Ahora el marcador debería ser 15-15
  });

});
