import { BrowserRouter, Route, Routes } from "react-router-dom"
import MoviesPage from "../pages/Movies"
import MovieDetailsPage from "../pages/MovieDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div> Hompage</div>} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
