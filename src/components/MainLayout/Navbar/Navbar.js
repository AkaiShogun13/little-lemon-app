import NavLogo from "../../../assets/nav-logo.png"
import "./Navbar.css"
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import MenuIcon from "../../../assets/hamburger-menu.svg"



function Navbar() {
    const navigate = useNavigate();
    const onClickImg = () => {
        navigate("/")
    };

    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const navMenuItems = [
        {id: 1, label: "Home", link: "/"},
        {id: 2, label: "About", link: "/about"},
        {id: 3, label: "Menu", link: "/menu"},
        {id: 4, label: "Reservation", link: "/reservation"},
        {id: 5, label: "Order Online", link: "/orderonline"},
        {id: 6, label: "Login", link: "/login"}
    ];

    return (
        <div className="nav-menu">
            <img src={NavLogo}
                 className="nav-logo"
                 alt="Little Lemon logo"
                 width={195}
                 height={53}
                 onClick={onClickImg}>
            </img>
            <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
                <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
                    {navMenuItems.map(item => (
                        <li key={item.id}>
                            <a href={item.link} className="link">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="toggle-menu" onClick={toggleMenu}>
                <img src={MenuIcon} alt="hamburger-menu-icon" />
            </div>
        </div>
    )
}

export default Navbar