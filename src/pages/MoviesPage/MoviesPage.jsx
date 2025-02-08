import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import { getSearchedListOfFilms } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
    const [searchedFilms, setSearchedFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

   
    const query = searchParams.get("query") || "";

    useEffect(() => {
        if (!query) return;

        const getSearchedFilms = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getSearchedListOfFilms(query);
                setSearchedFilms(data);
            } catch (err) {
                setError("Oops, something went wrong");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getSearchedFilms();
    }, [query]);

    const handleSub = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        setSearchParams({ query });
    };

    return (
    <>
        <div>
            <MovieSearch 
                query={query} 
                handleSub={handleSub} 
                handleChange={(e) => setSearchParams({ query: e.target.value })} 
            />

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && searchedFilms.length === 0 && query && <p>No results found.</p>}

            <MovieList searchedFilms={searchedFilms} />
        </div>

    </>
    );
}
