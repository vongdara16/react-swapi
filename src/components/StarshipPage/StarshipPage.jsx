import { Link } from 'react-router-dom'

const StarshipPage = (props) => {

  return (  
    <>
      <Link to={`/starship`} key={props.starship.edited} state={props.starship} >
        Name: {props.starship.name} <br />
      </Link>
    </>

  );
}
 
export default StarshipPage;