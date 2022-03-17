import './StarshipDetails.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getStarshipDetails } from '../../services/sw-api';
import Pilots from '../../components/Pilots/Pilots';

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    getStarshipDetails(location.state.url)
    .then(starshipDetail => setStarshipDetails(starshipDetail))
  }, [])
  
  return (  
    <div id='ship-detail-page'>
      {starshipDetails.name ? 
      <>
      <div id='starship-details'>
        <h2 id='starship-name'>{starshipDetails.name}</h2>
        <h4 id='starship-model'>Model: {starshipDetails.model}</h4>
        <h4 id='starship-pilot-list'>Pilot List: </h4>
        {starshipDetails.pilots.length ?
          <>
            <Pilots pilot={starshipDetails.pilots} />
          </>
          :
          <>
            <h5>No Pilots for this Starship</h5>
          </>
        }
        <a href="/" id='return-link'>Return</a>
      </div>
      </>
      :
      <>
      <h4 id='starship-load'>The Starship is Loading!</h4>
      </>
      }
    </div>
  );
}
 
export default StarshipDetails;