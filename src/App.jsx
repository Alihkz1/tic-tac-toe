import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleCellClick() {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  }
  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          handleCellClick={handleCellClick}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </>
  );
}

export default App;
