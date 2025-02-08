import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../api";
function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]); // Default to an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        setLoading(true);
        const data = await fetchReviews(movieId);
        setReviews(data.results); // Set the reviews array from the API response
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to fetch movie reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getMovieReviews();
  }, [movieId]);

  if (loading) return <p>Fetching movie reviews...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
        <ul>
          {reviews.map(({ content
, id, author_details }) => (
            <li key={id}>
              
              {author_details && (
                    <div >
                <small>Username: {author_details.username}</small>
                  <br />
                <small>Rating: {author_details.rating}</small>
                <p>{content}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default MovieReviews;