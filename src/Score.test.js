import TennisScore from "./Score.js";

describe('Tennis Scorer', () => {

  it("debería retornar 'Love-Love' al comenzar el juego", () => {
    const game = new TennisScore();
    expect(game.getScore()).toEqual("Love-Love");
  });
  

});
