import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getStarshipDetails } from '../../services/sw-api';

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  console.log(location)

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
        <a href="/starships">Return</a>
      </div>
      </>
      :
      <>
      <h4>Loading Starship!</h4>
      </>
      }
    </>
  );
}
 
export default StarshipDetails;