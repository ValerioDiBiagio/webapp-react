import { BrowserRouter, Route, Routes } from "react-router-dom"
import MoviesPage from "../pages/Movies"
import MovieDetailsPage from "../pages/MovieDetails"
import DefaultLayout from "../layouts/DefaultLayout"
import GlobalContext from "../contexts/globalContext"
import { useState } from "react"

function App() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <GlobalContext.Provider value={(
      isLoading,
      setIsLoading
    )}>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" element={<div> Hompage</div>} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider >
  )
}

export default App
