import { useState, useEffect } from 'react';
import { getAllStarships } from '../../services/sw-api';
import { Link } from 'react-router-dom'
import StarshipPage from '../../components/StarshipPage/StarshipPage';

const StarshipList = (props) => {
  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  }, [])

  return (  
    <>
      <h3>Starship List</h3>
      {starships.length ?
      <>
        {starships.map(starship => 
          <StarshipPage key={starship.edited} starship={starship} state={{starship}} />
          // <Link to={`/starship`} key={starship.edited} state={{starship}}>
          //   Name: {starship.name} <br />
          // </Link>
        )}
      </>
      :
      <>
        <h3>Loading Starships...</h3>
      </>
      }
    </>
  );
}
 
export default StarshipList;