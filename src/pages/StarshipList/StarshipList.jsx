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
      <h3 id='list-title'>All Starships</h3>
      {starships.length ?
      <div id='starship-list'>
        {starships.map(starship => 
          <StarshipPage key={starship.edited} starship={starship} />
        )}
      </div>
      :
      <>
        <h3 id='load-ships'>Loading All Starships...</h3>
      </>
      }
    </>
  );
}
 
export default StarshipList;