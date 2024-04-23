import '../css/Main.css';

function Menu() {
  return (
    <>
      <section className="menuSection">
        <div className="menuSection__contain">
          <h1 className="menuSection__contain--title">Play the Game</h1>
          <h2 className="menuSection__contain--subTitle">
            Put the names of the players
          </h2>
          <form className="menuSection__contain--form" action="/play" method="get">
            <label htmlFor="player1">
              <h3>Player 1:</h3>
              <input type="text" name="player1" id="player1" />
            </label>
            <label htmlFor="player2">
              <h3>Player 2:</h3>
              <input type="text" name="player2" id="player2" />
            </label>
            <button type="submit">Play!</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Menu;
