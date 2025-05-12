import { Link } from "react-router-dom";

function MovieCard({ data }) {

    const { id, title, director, abstract, imagePath } = data

    return (
        <div className="card">
            <img src={imagePath} alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>Autor: <strong>{director}</strong></p>
                <p className="card-text">{abstract}</p>
                <Link to={`/movies/${id}`}>Scheda Film</Link>
            </div>
        </div>
    )
}

export default MovieCard;