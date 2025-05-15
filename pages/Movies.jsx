import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";

function MoviesPage() {

    const [movies, setMovies] = useState([]);

    const [search, setSearch] = useState('')

    const { setIsLoading } = useContext(GlobalContext);

    function getMovies() {

        setIsLoading(true);

        axios.get('http://127.0.0.1:3000/movies', {
            params: {
                search
            }
        })

            .then(response => {
                setMovies(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }

    useEffect(getMovies, []);

    function searchMovies(e) {
        e.preventDefault();

        getMovies();

    }


    return (
        <>
            <div className="d-flex justify-content-between">
                <h1 className="mb-3">Movies</h1>
                <form onSubmit={searchMovies} className="row g-1">
                    <div className="col-auto">
                        <label className="visually-hidden">Search</label>
                        <input type="text" className="form-control" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Search</button>
                    </div>
                </form>
            </div>


            <section className="container">
                <div className="row gy-3">
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