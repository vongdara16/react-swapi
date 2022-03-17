import { useState, useEffect } from 'react';
import { getAllStarships } from '../../services/sw-api';
import { Link } from 'react-router-dom'


const StarshipList = (props) => {
  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    // console.log('component mounted')
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  })

  return (  
    <>
      <h3>Starship List</h3>
      {starships.length ?
      <>
        {starships.map(starship => 
          <Link to={`/${starship.name}`} key={starship.edited}>
            Name: {starship.name}
          </Link>
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