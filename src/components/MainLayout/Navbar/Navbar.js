import NavLogo from "../../../assets/nav-logo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="nav-menu">
            <img src={NavLogo}
                 className="nav-logo"
                 alt="Little Lemon logo"
                 width={195}
                 height={53}>
            </img>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservation</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar