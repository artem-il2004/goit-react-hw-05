import { NavLink } from "react-router-dom"
import c from './Navigations.module.css'


const buildLinkClass = ({ isActive }) => {
  return ( isActive ? c.active : c.link);
};


function Navigations() {
  return (
      <div className={c.container}>
        <NavLink to='/' className={buildLinkClass}>Home</NavLink>  
        <NavLink to='/movies' className={buildLinkClass}>Movies</NavLink>  
    </div>
  )
}

export default Navigations 
