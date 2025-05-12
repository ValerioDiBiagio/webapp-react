import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

function MoviesPage() {

    const [movies, setMovies] = useState([])

    function getMovies() {
        axios.get('http://127.0.0.1:3000/movies')
            .then(response => {
                console.log(response.data);
                setMovies(response.data);
            })
            .catch(err => console.log(err))
    }

    useEffect(getMovies, []);

    return (
        <>
            <h1>Movie</h1>
            <section>
                <div className="row">
                    {movies.length ? movies.map(movie =>
                        <div className="col-12 col-md-4" key={movie.id}>
                            <MovieCard data={movie} />
                        </div>) : <div>Movie not found</div>}

                </div>
            </section>

        </>
    )
}

export default MoviesPage;