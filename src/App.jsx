import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div> Hompage</div>} />
        <Route path="/movies" element={<div> Movies List</div>} />
        <Route path="/movies/:id" element={<div> Movies Details</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
