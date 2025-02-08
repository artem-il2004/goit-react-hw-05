import { NavLink } from "react-router-dom"
import c from './MovieList.module.css'


const buildLinkClass = ({ isActive }) => {
  return ( isActive ? c.active : c.link);
};


function MovieList() {
  return (
      <div className={c.container}>
        <NavLink to='/' className={buildLinkClass}>Home</NavLink>  
        <NavLink to='/movies' className={buildLinkClass}>Movies</NavLink>  
    </div>
  )
}

export default MovieList
