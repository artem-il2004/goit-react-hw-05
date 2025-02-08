import { Link, useLocation } from "react-router-dom";
import c from './MovieList.module.css'


export default function MovieList({ searchedFilms }) { 
    if (!searchedFilms || searchedFilms.length === 0) {
        return null; 
    }

    const location = useLocation();
    return (
        <div>
            <ul className={c.container}>
                {searchedFilms.map((film) => (
                    <li key={film.id} className={c.list}>
                        <Link to={`/movies/${film.id}`} state={location}> <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt="" />{film.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
