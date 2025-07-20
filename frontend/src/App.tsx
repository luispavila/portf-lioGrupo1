import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SnakeGame from './pages/SnakeGame';
import TicTacToe from './pages/TicTacToe';
import PingPong from './pages/PingPong';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snake" element={<SnakeGame />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/pingpong" element={<PingPong />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App