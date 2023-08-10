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
                        <li>
                            <a className="footer-link" href="/">Home</a>
                        </li>
                        <li>
                            <a className="footer-link" href="/">About</a>
                        </li>
                        <li>
                            <a className="footer-link" href="/">Menu</a>
                        </li>
                        <li>
                            <a className="footer-link" href="/">Reservation</a>
                        </li>
                        <li>
                            <a className="footer-link" href="/">Order Online</a>
                        </li>
                        <li>
                            <a className="footer-link" href="/">Login</a>
                        </li>
                    </ul>
                </section>
                <section className="footer-contact">
                    <ul>
                        <h3>Contact</h3>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
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