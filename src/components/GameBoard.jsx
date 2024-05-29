import { useState } from "react";

const initialGameBoard = [
  //every array should hold three values.
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((gameBoard) => {
      const updateBorad = [...gameBoard.map((row) => [...row])];

      updateBorad[rowIndex][colIndex] = activePlayerSymbol;
      return updateBorad;
    });
    onSelectSquare ();  
  }


  return (
    <ol id="game-board">
      {gameBoard.map(
        (
          row,
          rowIndex //to make the row of grid
        ) => (
          <li key={rowIndex}>
            <ol>
              {row.map(
                (
                  playerSymbol,
                  colIndex //to make the col of grid
                ) => (
                  <li key={colIndex}>
                    <button
                      onClick={() => handleSelectSquare(rowIndex, colIndex)}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                )
              )}
            </ol>
          </li>
        )
      )}
    </ol>
  );
}
