import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="bg-warning py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <div>logo</div>
                <ul className="d-flex list-unstyled n-0 gap-2">
                    <li><NavLink to="/">Hompage</NavLink></li>
                    <li><NavLink to="/movies">Movies</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;