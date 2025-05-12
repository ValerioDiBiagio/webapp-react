import { Link } from "react-router-dom";

function MovieCard({ data }) {

    const { id, title, director, abstract, imagePath } = data

    return (
        <div className="card">
            <img src={imagePath} alt="{title}" className="w-50 mx-auto" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>Director: <strong>{director}</strong></p>
                <p className="card-text">{abstract}</p>
                <Link to={`/movies/${id}`} className="btn btn-primary">Scheda Film</Link>
            </div>
        </div>
    )
}

export default MovieCard;