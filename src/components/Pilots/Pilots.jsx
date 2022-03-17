import { useState } from 'react';



const Pilots = (props) => {
  const [pilotsList, setPilotsList] = useState([])

  const pilotUrls = props.pilot

  async function getPilots(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    const pilotObjects = await Promise.all(promises);
    return pilotObjects;
  }

  getPilots(pilotUrls).then(pilots => setPilotsList(pilots));

  return (  
    <>
      {pilotsList.length ?
        <>
          {pilotsList.map(pilot => 
            <div key={pilot.name}>
              <h5>{pilot.name}</h5>
            </div>
          )}
        </>
        :
        <>
          <h5>The Pilots are arriving!</h5>
        </>
      }
    </>
  );
}
 
export default Pilots;
