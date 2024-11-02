import Player from "./components/player";

function App() {
  return (
    <>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        Game Board
      </div>
      Log
    </>
  );
}

export default App;
