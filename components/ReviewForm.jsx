import axios from "axios";
import { useState } from "react";

function ReviewForm({ movieId, refreshMovie }) {

    const initialValues = {
        name: '',
        text: '',
        vote: 1
    }

    const [formData, setFormData] = useState(initialValues);

    function handFormData(e) {
        const { name, value } = e.target;

        let currentValue = value

        if (name === 'vote') {
            currentValue = parseInt(value);
        }
        setFormData((formData) => ({
            ...formData,
            [name]: currentValue,
        }))
    }

    function sendData(e) {
        e.preventDefault();

        axios.post(`http://127.0.0.1:3000/movies/${movieId}/reviews`, formData)
            .then(response => {
                refreshMovie();
                setFormData(initialValues);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="card bg-secondary mb-5">
            <div className="card-header fw-bold">
                Scrivi una recensione su questo film
            </div>
            <div className="card-body">
                <form onSubmit={sendData}>
                    <div className="mb-3">
                        <label htmlFor="review-name" className="form-label fw-bold">Inerisci il tuo nome</label>
                        <input type="text" className="form-control" id="review-name" placeholder="Inserisci il tuo nome" value={formData.name} name="name" onChange={handFormData} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="review-text" className="form-label fw-bold">Testo della recensione</label>
                        <textarea className="form-control" id="review-text" rows="3" value={formData.text} name="text" onChange={handFormData}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="review-vote" className="form-label fw-bold">Inerisci il tuo voto</label>
                        <input type="number" min={1} max={5} className="form-control" id="review-vote" value={formData.vote} name="vote" onChange={handFormData} />
                    </div>
                    <button type="submit" className="btn btn-primary">Aggiungi recensione</button>
                </form>
            </div>
        </div >
    )
}

export default ReviewForm;