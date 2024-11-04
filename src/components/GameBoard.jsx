const initialValue = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ handleCellClick, turns }) {
  let gameBoard = initialValue;
  for (const turn of turns) {
    const { square, player } = turn;
    const { rowIndex, colIndex } = square;
    gameBoard[rowIndex][colIndex] = player;
  }

  // const [boardState, setBoardState] = useState(initialValue);
  // function cell_onClick(rowIndex, colIndex) {
  //   setBoardState((boardState) => {
  //     /* if state is an object or array => update them in immutable way */
  //     /* create copy -> update a part */
  //     /* in code below even nested arrays are updated in memory */
  //     const updatedBoard = [...boardState.map((innerArray) => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   handleCellClick();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  disabled={playerSymbol}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
