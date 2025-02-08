import { useEffect, useState } from "react";
import { getTrendingFilms } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

function Home() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const getFilms = async () => { 
            const topFilms = await getTrendingFilms();
            setFilms(topFilms);
        };
        getFilms();
    }, []);

    return (
        <div>
            <MovieList searchedFilms={films} />
        </div>
    );
}

export default Home;