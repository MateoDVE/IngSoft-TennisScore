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
    game.player2Scores(); 
    expect(game.getScore()).toEqual("15-15");
  });

  it("debería retornar '30-15' cuando el Jugador 1 anota dos veces y el Jugador 2 una vez", () => {
    const game = new TennisScore();
    game.player1Scores(); 
    game.player1Scores(); 
    game.player2Scores(); 
    expect(game.getScore()).toEqual("30-15");
  });

  it("debería retornar '15-30' cuando el Jugador 1 anota una vez y el Jugador 2 anota dos veces", () => {
    const game = new TennisScore();
    game.player1Scores();
    game.player2Scores();
    game.player2Scores();
    expect(game.getScore()).toEqual("15-30");
  });

 it("debería retornar 'Deuce' cuando ambos jugadores anotan tres veces", () => {
    const game = new TennisScore();
    game.player1Scores(); 
    game.player1Scores(); 
    game.player1Scores(); 
    game.player2Scores(); 
    game.player2Scores(); 
    game.player2Scores();
    expect(game.getScore()).toEqual("Deuce");
  });

  it("debería retornar 'Ventaja Jugador 1' cuando el Jugador 1 tiene ventaja", () => {
    const game = new TennisScore();
    game.player1Scores();
    game.player1Scores();
    game.player1Scores();
    game.player2Scores();
    game.player2Scores();
    game.player2Scores();
    game.player1Scores();
    expect(game.getScore()).toEqual("Advantage Player 1");
  });

  it("debería retornar 'Ventaja Jugador 2' cuando el Jugador 2 tiene ventaja", () => {
    const game = new TennisScore();
    game.player1Scores();
    game.player1Scores();
    game.player1Scores();
    game.player2Scores();
    game.player2Scores();
    game.player2Scores();
    game.player2Scores();
    expect(game.getScore()).toEqual("Advantage Player 2");
  });
});
