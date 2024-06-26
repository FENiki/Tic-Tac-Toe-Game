import Player from "./Player";


export default function GameBoard({ onSelectSquare, board }) {

//  const turn = turns.map((turn)=>{ // my approach by map

//   const {square , player} = turn;
//   const {row , col }= square;

//   gameBoard [row][col]= player;
//  })
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((gameBoard) => {
  //     const updateBorad = [...gameBoard.map((row) => [...row])];

  //     updateBorad[rowIndex][colIndex] = activePlayerSymbol;
  //     return updateBorad;
  //   });
  //   onSelectSquare ();
  // }

  return (
    <ol id="game-board">
      {board.map(
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
                    <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null }>
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
