import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getStarshipDetails } from '../../services/sw-api';
import Pilots from '../../components/Pilots/Pilots';

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  // console.log(location)

  useEffect(() => {
    getStarshipDetails(location.state.url)
    .then(starshipDetail => setStarshipDetails(starshipDetail))
  }, [])
  
  return (  
    <>
      <h3>Starship Details Page</h3>
      {starshipDetails.name ? 
      <>
      <div>
        <h4>Name: {starshipDetails.name}</h4>
        <h4>Model: {starshipDetails.model}</h4>
        <h3>Pilot List: </h3>
        {starshipDetails.pilots.length ?
        <>
          <Pilots pilot={starshipDetails.pilots} />
        </>
        :
        <>
          <h5>No Pilots for this Starship</h5>
        </>
        }
        <a href="/">Return</a>
      </div>
      </>
      :
      <>
      <h4>The Starship is Loading!</h4>
      </>
      }
    </>
  );
}
 
export default StarshipDetails;