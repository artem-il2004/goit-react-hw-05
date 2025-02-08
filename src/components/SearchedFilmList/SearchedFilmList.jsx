import { Link, useLocation } from "react-router-dom";

export default function SearchedFilmList({ searchedFilms }) { 
    if (!searchedFilms || searchedFilms.length === 0) {
        return null; 
    }

    const location = useLocation();
    return (
        <div>
            <ul>
                {searchedFilms.map((film) => (
                    <li key={film.id}>
                        <Link to={`/movies/${film.id}`} state={location}>{film.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
