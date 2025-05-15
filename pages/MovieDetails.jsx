import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import StarRating from "../components/StarRating";
import ReviewForm from "../components/ReviewForm";
import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";


function MovieDetailsPage() {
    const { id } = useParams()
    const [movie, setMovie] = useState({});

    const { setIsLoading } = useContext(GlobalContext);


    function getMovie() {

        setIsLoading(true)

        axios(`http://127.0.0.1:3000/movies/${id}`)
            .then(response => setMovie(response.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }

    useEffect(getMovie, []);

    function renderReviews() {
        return movie.reviews?.map(review => <ReviewCard key={review.id} data={review} />);

    }

    return (

        <article id="movie">
            {movie ? <div>
                <img className="w-25 mb-2 rounded" src={movie.imagePath} alt="{movie.imagePath}" />
                <h1>{movie.title}</h1>
                <h2>Director: {movie?.director}</h2>
                <p>{movie.abstract}</p>
            </div> : <div> Film non trovato</div>}

            <hr />

            <section id="reviews">
                <header className="d-flex justify-content-between mb-4 align-items-center">
                    <h4>Le nostre recensioni</h4>
                    <div>
                        <strong>Average:</strong> {movie.average_reviews} <StarRating vote={movie.average_reviews} />
                    </div>
                </header>
                {movie.reviews?.length ? renderReviews() : <div>Nessuna recensione</div>}
            </section>

            <section id="add-reviews">
                <ReviewForm movieId={id} refreshMovie={getMovie} />


            </section>


        </article>
    )

}

export default MovieDetailsPage;