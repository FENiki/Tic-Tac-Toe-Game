
import {useState} from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);  
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(row , col) {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X" );
    setGameTurns((prevTurn)=>{
      let curPlayer = 'X';

      if (prevTurn.length > 0 && prevTurn[0].player === 'X' ){
        curPlayer ="O";
      }


      const updatedTurns = [{square : {row : rowIndex , col : colIndex }, player : curPlayer }, ...prevTurn]
      return updatedTurns;
    })
  }


  return (
    <main>
      <div id="game-container" >
        <ol id="players" className="highlight-player">
          <Player initialName ="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <Log />
    </main>
  ); 
}

export default App;
74
.5 