import { useEffect, useState } from 'react';
import { getPilots } from '../../services/sw-api';

const Pilots = (props) => {
  const [pilotsList, setPilotsList] = useState([])
  const pilotUrls = props.pilot

  useEffect(() => {
    getPilots(pilotUrls)
    .then(pilots => setPilotsList(pilots));
  }, [])

  return (  
    <>
      {pilotsList.length ?
        <div id='all-pilots'>
          {pilotsList.map(pilot => 
            <div key={pilot.name}>
              <h5>{pilot.name}</h5>
            </div>
          )}
        </div>
        :
        <>
          <h5>The Pilots are arriving!</h5>
        </>
      }
    </>
  );
}
 
export default Pilots;
