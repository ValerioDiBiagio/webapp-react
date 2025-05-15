import StarRating from "./StarRating";

function ReviewCard({ data }) {

    const { text, vote, name } = data;

    return (
        <div className="card bg-secondary mb-3">
            <div className="card-body">
                <p>{text}</p>
                <p ><strong>Voto:</strong> {vote} <StarRating vote={vote} /></p>
                <p ><strong>By</strong> {name}</p>
            </div>
        </div>

    )
}

export default ReviewCard;