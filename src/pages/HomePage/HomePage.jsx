import { useEffect, useState } from "react";
import { getTrendingFilms } from "../../api";
import c from './HomePage.module.css'
import { Link } from "react-router-dom";

function Home() {
    const [films, setFilms] = useState([]);


    useEffect(() => {
        const getFilms = async () => { 
            const topFilms = await getTrendingFilms();
            setFilms(topFilms)
        }
        getFilms();
    }, [])
    


  return (
  <div>
    <ul className={c.container}>
      {films.map(({ backdrop_path, id, title }) => (
        <li key={id} className={c.list}>
          <Link to={`/movies/${id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} />
            {title}
            </Link>
        </li>
      ))}
    </ul>
  </div>
);
}

export default Home
