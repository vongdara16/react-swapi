import './App.css';
import { Routes, Route } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      {/* <a href="/starships">Star Wars Starships</a> */}
      <h1>Star Wars Starships!</h1>
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
