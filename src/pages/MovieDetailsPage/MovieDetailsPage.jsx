import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../api";
import c from './MovieDetailsPage.module.css'


function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? '/movies');

  
  

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie found.</p>;

    return (
      <>
        <Link to={goBackUrl.current}>Go back</Link>
      <div className={c.container}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <div className={c.textContainer}> 
          <h1 className={c.title}>Oryginal name:{movie.original_title}</h1>
          <p className={c.popularity}>Popularity: {movie.popularity}</p>
              <p className={c.description}>{movie.overview}</p>
          </div>
            </div>
            <div>
                <h2>Additional information</h2>
                <ul>
                    <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>
                    <li><Link to={`/movies/${movieId}/reviews`} >Reviews</Link></li>
                </ul>
            </div>
            <Outlet/>
    </>
  );
}

export default MovieDetailsPage;
