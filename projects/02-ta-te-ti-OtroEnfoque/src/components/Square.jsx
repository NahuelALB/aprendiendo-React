import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/gameSection.css';

function Square() {
  const idSquare = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const players = {
    x: 'player1',
    o: 'player2',
  };

  const [turn, setTurn] = useState(players.x);
  const [clicked, setClicked] = useState(false);
  const [marked, setMarked] = useState(Array(9).fill(false));

  const turnsEvent = () => {
    if (!clicked) {
      setClicked(true);
      if (turn === players.x) {
        setTurn(players.o);
      } else if (turn === players.o) {
        setTurn(players.x);
      }
    }
  };

  const handleClick = (id) => {
    if (!marked[id - 1]) {
      const newMarked = [...marked];
      newMarked[id - 1] = true;

      setMarked(newMarked);

      turnsEvent();
    }
  };

  return (
    <div className="gameSection">
      <div className="gameSection_game">
        {idSquare.map((id) => {
          return (
            <div
              key={id}
              id={id}
              className="gameSection_square"
              onClick={() => handleClick(id)}
            >
              Square {id}
              <div
                className={
                  marked[id - 1]
                    ? turn === players.x
                      ? 'gameSection_square-markedX'
                      : 'gameSection_square-markedO'
                    : ''
                }
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Square;
