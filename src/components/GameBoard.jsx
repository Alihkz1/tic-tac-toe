import { useState } from "react";

const initialValue = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [boardState, setBoardState] = useState(initialValue);
  function cell_onClick(rowIndex, colIndex) {
    setBoardState((boardState) => {
      /* if state is an object or array => update them in immutable way */
      /* create copy -> update a part */
      /* in code below even nested arrays are updated in memory */
      const updatedBoard = [...boardState.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = "X";
      return updatedBoard;
    });
  }
  return (
    <ol id="game-board">
      {boardState.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => cell_onClick(rowIndex, colIndex)}>
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
