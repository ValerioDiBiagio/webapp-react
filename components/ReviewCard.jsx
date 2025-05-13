import StarRating from "./StarRating";

function ReviewCard({ data }) {

    const { text, vote, name } = data;

    return (
        <div className="card mb-3">
            <div className="card-body">
                <p>{text}</p>
                <p>Voto: {vote} <StarRating vote={vote} /></p>
                <p>By {name}</p>
            </div>
        </div>

    )
}

export default ReviewCard;