import NavLogo from "../../../assets/nav-logo.png"
import Homepage from "../../pages/Homepage";
import About from "../../pages/About"
import Menu from "../../pages/Menu"
import Reservation from "../../pages/Reservation"
import OrderOnline from "../../pages/OrderOnline"
import Login from "../../pages/Login"
import "./Navbar.css"
import React from "react"
import {Link, Routes, Route, useNavigate} from "react-router-dom"



function Navbar() {
    const navigate = useNavigate();
    const onClickImg = () => {
        navigate("/")
    };

    return (
        <div>
            <nav className="nav-menu">
                <img src={NavLogo}
                    className="nav-logo"
                    alt="Little Lemon logo"
                    width={195}
                    height={53}
                    onClick={onClickImg}>
                </img>
                <ul>
                    <Link to="/" className="nav-list">Home</Link>
                    <Link to="/about" className="nav-list">About</Link>
                    <Link to="/menu" className="nav-list">Menu</Link>
                    <Link to="/reservation" className="nav-list">Reservation</Link>
                    <Link to="/orderOnline" className="nav-list">Order Online</Link>
                    <Link to="/login" className="nav-list">Login</Link>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/reservation" element={<Reservation/>} />
                <Route path="/orderonline" element={<OrderOnline/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </div>
    );
}

export default Navbar