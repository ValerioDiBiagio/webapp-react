import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav>
            <div>logo</div>
            <ul>
                <li><NavLink to="/">Hompage</NavLink></li>
                <li><NavLink to="/movies">Movies</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header;