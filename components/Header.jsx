import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="bg-secondary py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <ul className="d-flex list-unstyled n-0 gap-2">
                    <li ><NavLink className="text-decoration-none text-dark fw-bold" to="/">Hompage</NavLink></li>
                    <li><NavLink className="text-decoration-none text-dark fw-bold " to="/movies">Movies</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;