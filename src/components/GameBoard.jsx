const initialGameBoard = [
  //every array should hold three values.
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (  //to make the row of grid 
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => ( //to make the col of grid
              <li key={colIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

