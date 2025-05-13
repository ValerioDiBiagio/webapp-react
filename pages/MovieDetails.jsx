import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetailsPage() {
    const { id } = useParams()
    const [movie, setMovie] = useState({});


    function getMovie() {
        axios(`http://127.0.0.1:3000/movies/${id}`)
            .then(response => setMovie(response.data))
            .catch(err => console.log(err));
    }

    useEffect(getMovie, []);

    return (

        <article>
            {movie ? <>
                <h1>{movie.title}</h1>
                <h2>Director: {movie.director}</h2>
                <p>{movie.abstract}</p>

                <hr />

                {movie.reviews?.length ? <div>Elenco recensioni</div> : <div>Nessuna recensione</div>}

            </> : 'Film non trovato'
            }
        </article>
    )

}

export default MovieDetailsPage;