import MovieCard from "../components/MovieCard";

function MoviesPage() {
    return (
        <>
            <h1>Movie</h1>
            <section>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <MovieCard />
                    </div>
                </div>
            </section>

        </>
    )
}

export default MoviesPage;