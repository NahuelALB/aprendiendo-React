import { Routes, Route } from 'react-router-dom';
import './assets/css/index.css';
//Componentes importados
import Header from './assets/components/Header';
import Game from './assets/components/Game';
import Menu from './assets/components/Menu';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact Component={Menu} />
        <Route path="/play" Component={Game} />
      </Routes>
    </>
  );
}

export default App;
