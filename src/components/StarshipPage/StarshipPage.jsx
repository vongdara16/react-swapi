import { Link } from 'react-router-dom'

const StarshipPage = (props) => {

  return (  
    <>
      <Link to={`/starship`} key={props.starship.edited} state={props.starship} id='starship-link'>
        {props.starship.name}
      </Link>
    </>
  );
}
 
export default StarshipPage;