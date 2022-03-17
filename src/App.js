import './App.css';
import { Routes, Route } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList';

function App() {
  return (
    <>
      <h1>Star Wars Starships</h1>
      <Routes>
        <Route path='/' element={<StarshipList />} />

      </Routes>
    </>
  );
}

export default App;
