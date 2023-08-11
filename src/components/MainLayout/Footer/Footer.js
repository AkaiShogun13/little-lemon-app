import React from "react"
import {Link} from "react-router-dom"
import FooterLogo from "../../../assets/footer-logo.png"
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer-menu">
            <article className="footer-container">
                    <img src={FooterLogo}
                        className="footer-logo"
                        alt="Little lemon logo"
                        width={200}
                        height={200}>
                    </img>
                <section className="footer-sitemap">
                    <ul>
                        <h3>Sitemap</h3>
                        <Link to="/" className="footer-list">Home</Link>
                        <Link to="/About" className="footer-list">About</Link>
                        <Link to="/Menu" className="footer-list">Menu</Link>
                        <Link to="/Reservation" className="footer-list">Reservation</Link>
                        <Link to="/OrderOnline" className="footer-list">Order Online</Link>
                        <Link to="/Login" className="footer-list">Login</Link>
                    </ul>
                </section>
                <section className="footer-contact">
                    <ul>
                        <h3>Contact</h3>
                        <li className="footer-list">Address</li>
                        <li className="footer-list">Phone Number</li>
                        <li className="footer-list">Email</li>
                    </ul>
                </section>
                <section className="footer-socials">
                    <ul>
                        <h3>Socials</h3>
                        <li>
                            <a className="footer-link" href="https://www.instagram.com">Instagram</a>
                        </li>
                        <li>
                            <a className="footer-link" href="https://www.facebook.com">Facebook</a>
                        </li>
                        <li>
                            <a className="footer-link" href="/">Join Us!</a>
                        </li>
                    </ul>
                </section>
            </article>
        </footer>
    );
}

export default Footer