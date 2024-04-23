import { useEffect, useState } from 'react';

function Square({ id, turns, playerTurn, player1, player2, onClick }) {
  /* Este tendrá el estado para renderizar un dibujo en una Square */
  const [marked, setMarked] = useState(null);
  /* Bandera que permitirá saber si un componente fue clickeado */
  const [clicked, setClicked] = useState(false);

  /* Función que se ejecutará cuando se active el evento "onClick" */
  const handleClick = () => {
    if (!clicked) {
      turns();
      setClicked(true);
      console.log(
        'La casilla ' + id + ' está marcada y ya no está disponible //',
        playerTurn,
      );
      if (playerTurn === player1 || playerTurn === null) {
        setMarked('gameSection__ticTacToe--square--markedX');
      } else if (playerTurn === player2) {
        setMarked('gameSection__ticTacToe--square--markedO');
      }
    }
  };

  const bothEvents = () => {
    handleClick();
    onClick();
  };

  return (
    <>
      <div className="gameSection__ticTacToe--square" onClick={bothEvents}>
        <div>{id}</div>
        <div className={marked}></div>
      </div>
    </>
  );
}
export default Square;
