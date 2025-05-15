import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function MovieCard({ data }) {

    const { title, director, abstract, imagePath, average_reviews, slug } = data

    return (
        <div className="card bg-secondary pt-3">
            <img src={imagePath} alt="{title}" className="w-50 mw-100 mx-auto rounded" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>Director: <strong>{director}</strong></p>
                <p>Average reviews: <StarRating vote={average_reviews} /></p>
                <p className="card-text">{abstract}</p>
                <Link to={`/movies/${slug}`} className="btn btn-primary">Scheda Film</Link>
            </div>
        </div>
    )
}

export default MovieCard;