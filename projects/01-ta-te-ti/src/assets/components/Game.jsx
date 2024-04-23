import { useState, useEffect } from 'react';
import Square from './Square';

function Game() {
  /** Estado que contendrán los nombres de los player, pero por ahora su estado
      inicial será NULL */
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);

  /** Cuando se monte el componente "Game" cambiará el estado de los players
      de NULL --> Los nombres ingresados */
  useEffect(() => {
    const url = new URLSearchParams(window.location.search);

    let playerOne = url.get('player1');
    let playerTwo = url.get('player2');

    setPlayer1(playerOne);
    setPlayer2(playerTwo);

    console.log(playerOne);
    console.log(playerTwo);
  }, []);

  /** Acá estará los estados de los turnos el cual el NULL 
     será su estado inicial */
  const [turn, setTurn] = useState(null);
  const [markedPlayerOne, setMarkedPlayerOne] = useState('h2-turn');
  const [markedPlayerTwo, setMarkedPlayerTwo] = useState('');

  /* Acá estará almacenado en un array a que jugador le pertenece tal casilla
     para luego realizar el estado de quien ganó o si hubo empate */
  const [owner, setOwner] = useState(Array(9).fill(null));

  const handleClick = (id) => {
    if (!owner[id] && turn) {
      const newMarkedSquares = [...owner];
      newMarkedSquares[id] = turn;
      setOwner(newMarkedSquares);
    }
  };

  console.log(owner);

  /** Función que tendrá  */
  const turns = () => {
    /* if (!isInitialized) {
      setTurn(player1);
      setIsInitialize(true);
    } */
    if (turn === player1 || turn === null) {
      setTurn(player2);
      setMarkedPlayerTwo('h2-turn');
      setMarkedPlayerOne('');
    } else if (turn === player2) {
      setTurn(player1);
      setMarkedPlayerOne('h2-turn');
      setMarkedPlayerTwo('');
    }
  };

  /* Creación del componente Square en un bucle para simplificar código */
  let squares = [];
  /** Bucle FOR que creará 9 componentes "Square" */
  for (let i = 0; i < 9; i++) {
    squares.push(
      <Square
        key={i}
        id={i}
        turns={turns}
        playerTurn={turn}
        player1={player1}
        player2={player2}
        onClick={() => handleClick(i)}
        owner={owner[i]}
      />,
    );
  }

  return (
    <>
      <section className="gameSection">
        <h2 className={markedPlayerOne}>{player1}</h2>
        <div className="gameSection__ticTacToe">{squares}</div>
        <h2 className={markedPlayerTwo}>{player2}</h2>
      </section>
    </>
  );
}

export default Game;
