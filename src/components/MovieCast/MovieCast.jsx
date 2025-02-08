import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../../api";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        setLoading(true);
        const data = await fetchCast(movieId);
          setCast(data.cast);
          console.log(data.cast);
          
      } catch {
        setError("Failed to fetch movie details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getMovieCast();
  }, [movieId]);

  if (loading) return <p>Fetching movie cast details...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ original_name, character, credit_id }) => (
            <li key={credit_id}>
              <strong>{original_name}</strong> as <em>{character}</em>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information found for this movie.</p>
      )}
    </div>
  );
}

export default MovieCast;
