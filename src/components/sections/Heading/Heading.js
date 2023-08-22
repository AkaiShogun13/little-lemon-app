import React from "react";
import HeroImg from "../../../assets/hero-img.jpg"
import "./Heading.css"
import { useNavigate } from "react-router-dom";

function Heading() {
    const navigate = useNavigate()
    const navigateToReservation = () => {
        navigate("/reservation");
    }

    return (
        <article className="hero">
            <section className="hero-container">
                <span className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <button onClick={navigateToReservation} className="reserv-btn">Reserve a table</button>
                </span>
                <span className="hero-img">
                    <img src={HeroImg}
                        alt="Little lemon hero img"
                        width={296}
                        height={347}
                        className="image">
                    </img>
                </span>
            </section>
        </article>
    );
}

export default Heading